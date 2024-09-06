const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./config.env" });

async function connectDB() {
  const uri = process.env.ATLAS_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("MongoDB Connected");

    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));

    const dbName = "KaUnite"; 
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
