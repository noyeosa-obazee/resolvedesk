import { MongoClient } from "mongodb";
import "../loadEnvironment.js";
const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
  console.log("Successfully connected to MongoDB!");
} catch (e) {
  console.error(e);
}
let db = conn.db("ResolveDesk");
export default db;
