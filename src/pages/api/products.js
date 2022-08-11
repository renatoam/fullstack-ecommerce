import { client } from "../../util/mongodb";

export default async (req, res) => {
  const { MONGODB_COLLECTION, MONGODB_DB } = process.env;
  const mongodb = await client.connect();

  const products = await mongodb.db(MONGODB_DB)
    .collection(MONGODB_COLLECTION)
    .find()
    .limit(20)
    .toArray()

  res.json(products);
};
