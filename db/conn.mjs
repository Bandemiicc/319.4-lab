import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config()

let connectionString = process.env.atlasURI || '';

const client = new MongoClient(connectionString);

// varaible to hold connection info
let conn;

try {
   conn = await client.connect();
   console.log('MongoDB is connected') 
} catch (err) {
    console.error(err);
}

let db = conn.db('sample_training');

export default db;