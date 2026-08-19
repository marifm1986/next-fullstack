import mongoose, { type Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Missing MONGODB_URI environment variable. Define it in .env.local"
  );
}

// Shape of the cached connection object stored on globalThis.
interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Extend the Node.js global type so we can attach the cache without `any`.
declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

// Reuse the cached connection across hot reloads in development to avoid
// exhausting the database connection pool. In production a fresh module
// instance is used per server, so this simply guards the first call.
const cached: MongooseCache =
  global.mongooseCache ?? { conn: null, promise: null };

if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

export async function connectToDatabase(): Promise<Mongoose> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI!, {
      // Let Mongoose buffer commands until the connection is ready.
      bufferCommands: true,
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    // Reset the promise so subsequent calls can retry the connection.
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}

export default connectToDatabase;
