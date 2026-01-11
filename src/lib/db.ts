import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI: string = process.env.MONGODB_URI ?? "";

if (!MONGODB_URI) throw new Error("Missing MONGODB_URI environment variable");

type MongooseCache = {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
};

declare global {
  var mongoose: MongooseCache | undefined;
}

// Initialize global cache using nullish coalescing assignment
globalThis.mongoose ??= { conn: null, promise: null };

const cached = globalThis.mongoose;

export async function connectDB(): Promise<Mongoose> {
  if (cached.conn) return cached.conn;
  cached.promise ??= mongoose.connect(MONGODB_URI, { bufferCommands: false });
  cached.conn = await cached.promise;
  return cached.conn;
}
