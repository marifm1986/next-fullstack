import { Schema, model, models, type Model, type HydratedDocument } from "mongoose";

export interface IEvent {
  title: string;
  slug: string;
  description: string;
  overview: string;
  image: string;
  venue: string;
  location: string;
  date: string;
  time: string;
  mode: string;
  audience: string;
  agenda: string[];
  organizer: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export type EventDocument = HydratedDocument<IEvent>;

// Non-empty string validator reused across required text fields.
const nonEmpty = {
  validator: (v: string) => typeof v === "string" && v.trim().length > 0,
  message: "Field cannot be empty",
};

const EventSchema = new Schema<IEvent>(
  {
    title: { type: String, required: true, trim: true, validate: nonEmpty },
    slug: { type: String, unique: true, index: true },
    description: { type: String, required: true, validate: nonEmpty },
    overview: { type: String, required: true, validate: nonEmpty },
    image: { type: String, required: true, validate: nonEmpty },
    venue: { type: String, required: true, validate: nonEmpty },
    location: { type: String, required: true, validate: nonEmpty },
    date: { type: String, required: true },
    time: { type: String, required: true },
    mode: { type: String, required: true, validate: nonEmpty },
    audience: { type: String, required: true, validate: nonEmpty },
    agenda: {
      type: [String],
      required: true,
      validate: {
        validator: (arr: string[]) => Array.isArray(arr) && arr.length > 0,
        message: "Agenda must contain at least one item",
      },
    },
    organizer: { type: String, required: true, validate: nonEmpty },
    tags: {
      type: [String],
      required: true,
      validate: {
        validator: (arr: string[]) => Array.isArray(arr) && arr.length > 0,
        message: "Tags must contain at least one item",
      },
    },
  },
  { timestamps: true }
);

// Convert an arbitrary string to a URL-friendly slug.
function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

// Normalize `time` into 24-hour HH:mm. Accepts "9:5", "09:05", "9:05 PM", etc.
function normalizeTime(raw: string): string {
  const match = raw.trim().match(/^(\d{1,2}):(\d{2})\s*(am|pm)?$/i);
  if (!match) throw new Error(`Invalid time format: ${raw}`);
  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const meridiem = match[3]?.toLowerCase();
  if (meridiem === "pm" && hours < 12) hours += 12;
  if (meridiem === "am" && hours === 12) hours = 0;
  if (hours > 23 || minutes > 59) throw new Error(`Invalid time value: ${raw}`);
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

EventSchema.pre("save", function (next:any) {
  try {
    // Regenerate slug only when title changes to keep existing URLs stable.
    if (this.isModified("title")) {
      this.slug = slugify(this.title);
    }

    // Normalize `date` to ISO (YYYY-MM-DD) so downstream sorting/filtering is consistent.
    const parsed = new Date(this.date);
    if (Number.isNaN(parsed.getTime())) {
      return next(new Error(`Invalid date: ${this.date}`));
    }
    this.date = parsed.toISOString().split("T")[0];

    // Ensure `time` is stored as HH:mm 24-hour format.
    this.time = normalizeTime(this.time);

    next();
  } catch (err) {
    next(err as Error);
  }
});

const Event: Model<IEvent> =
  (models.Event as Model<IEvent>) || model<IEvent>("Event", EventSchema);

export default Event;
