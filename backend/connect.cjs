const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./config.env" });

async function connectDB() {
  const uri = process.env.ATLAS_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("MongoDB Connected");

    // List sa tanang database ok????
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));

    // List collections in the db
    const dbName = "KaUnite"; // replace with actual db name
    const collections = await client.db(dbName).listCollections().toArray();
    console.log(`\nCollections in ${dbName}:`);
    collections.forEach(collection => console.log(` - ${collection.name}`));

    return client;
  } catch (e) {
    console.error("Error connecting to MongoDB:", e);
    process.exit(1);
  }
}

module.exports = connectDB;
