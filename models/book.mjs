import { model, Schema } from "mongoose";

const schema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publicationYear: { type: Number, required: true },
  genre: { type: String, required: true },
  status: { type: String, default: "available" },
  borrowedBy: {
    name: { type: String },
    date: { type: String },
    email: { type: String },
  },

  waitlist: [
    {
      name: { type: String },
      email: { type: String },
    },
  ],
  image: { type: String, required: true },
  description: { type: String },
  comments: [
    {
      userName: { type: String },
      comment: { type: String },
    },
  ],
  rating: { type: Number },
});

const Book = new model("Book", schema);
export default Book;
