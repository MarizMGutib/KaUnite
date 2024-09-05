const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./config.env" });

async function connectDB() {
  const Db = process.env.ATLAS_URI;
  const client = new MongoClient(Db);

  try {
    await client.connect();
    console.log("MongoDB Connected");

    // Optional: Log collections
    const collections = await client.db("KaUnite").collections();
    collections.forEach((collection) =>
      console.log(collection.s.namespace.collection)
    );

    return client;
  } catch (e) {
    console.error(e);
    process.exit(1); // Exit the process if the connection fails
  }
}

module.exports = connectDB;
