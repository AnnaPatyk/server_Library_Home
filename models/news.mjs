import { Schema, model } from "mongoose";

const schema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  content: { type: String, required: true },
  publishedDate: { type: Date, default: Date.now },
  tags: { type: [String] },
  image: [],
});

const News = new model("News", schema);
export default News;
