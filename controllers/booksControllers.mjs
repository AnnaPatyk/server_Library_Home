import Book from "../models/book.mjs";

const creatBook = async (req, res) => {
  const data = req.body;
  const book = new Book(data);
  await book.save();
  res.send(book);
};
const bookId = async (req, res) => {
  const id = req.params.id;
  const book = await Book.findById(id);
  res.send(book);
};

const allBook = async (req, res) => {
  const book = await Book.find({});
  res.json(book);
};

const allBookGanre = async (req, res) => {
  const genre = req.params.genre;
  let book;

  genre !== "all"
    ? (book = await Book.find({ genre: genre }))
    : (book = await Book.find({}));

  res.json(book);
};

const removeBook = async (req, res) => {
  const id = req.params.id;
  await Book.findByIdAndDelete(id);
  res.send({ id });
};

const update = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const book = await Book.findByIdAndUpdate(id, data, { new: true });
  res.send(book);
};
export default { creatBook, allBook, bookId, removeBook, update, allBookGanre };
