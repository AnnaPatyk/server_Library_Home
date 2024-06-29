import express from "express";
import BooksController from "../controllers/booksControllers.mjs";

const booksRouter = express.Router();

booksRouter.get("", BooksController.allBook);
booksRouter.get("/:id", BooksController.bookId);
booksRouter.get("/genre/:genre", BooksController.allBookGanre);
booksRouter.post("/add", BooksController.creatBook);
booksRouter.delete("/:id", BooksController.removeBook);
booksRouter.put("/:id", BooksController.update);
export default booksRouter;
