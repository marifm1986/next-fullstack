import { Schema, model, models, type Model, type HydratedDocument, type Types } from "mongoose";
import Event from "./event.model";

export interface IBooking {
  eventId: Types.ObjectId;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export type BookingDocument = HydratedDocument<IBooking>;

// RFC 5322-lite email pattern — adequate for basic input validation.
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const BookingSchema = new Schema<IBooking>(
  {
    eventId: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      required: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: (v: string) => EMAIL_REGEX.test(v),
        message: (props) => `${props.value} is not a valid email`,
      },
    },
  },
  { timestamps: true }
);

// Confirm the referenced Event exists before persisting a booking; this prevents
// orphan bookings that point to deleted or fabricated event IDs.
BookingSchema.pre("save", async function (next:any) {
  try {
    if (this.isNew || this.isModified("eventId")) {
      const exists = await Event.exists({ _id: this.eventId });
      if (!exists) {
        return next(new Error(`Referenced Event ${this.eventId.toString()} does not exist`));
      }
    }
    next();
  } catch (err) {
    next(err as Error);
  }
});

const Booking: Model<IBooking> =
  (models.Booking as Model<IBooking>) || model<IBooking>("Booking", BookingSchema);

export default Booking;
