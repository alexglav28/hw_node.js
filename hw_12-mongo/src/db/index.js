import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME || "mydatabase";

if (!uri) {
  throw new Error("MONGO_URI is not set in .env");
}

let client;
let db;

export async function connectToDatabase() {
  client = new MongoClient(uri);
  await client.connect();                 
  db = client.db(dbName);                 
  return db;
}

export function getDb() {
  if (!db) throw new Error("Database is not initialized. Call connectToDatabase() first.");
  return db;
}

export async function disconnectFromDatabase() {
  if (client) await client.close();
}
