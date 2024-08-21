import express from "express";
import BooksController from "../controllers/booksControllers.mjs";
import { isAuth } from "../middleware/auth.mjs";
import { isAdmin } from "../middleware/admin.mjs";

const booksRouter = express.Router();

booksRouter.get("", BooksController.allBook);
booksRouter.get("/:id", BooksController.bookId);
booksRouter.get("/genre/:genre", BooksController.allBookGanre);
booksRouter.post("/add", isAdmin, BooksController.creatBook);
booksRouter.delete("/:id", isAdmin, BooksController.removeBook);
booksRouter.put("/:id", isAdmin, BooksController.update);
export default booksRouter;
