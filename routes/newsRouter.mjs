import express from "express";
import NewsController from "../controllers/newsController.mjs";
import { isAuth } from "../middleware/auth.mjs";
import { isAdmin } from "../middleware/admin.mjs";

const newsRouter = express.Router();

newsRouter.get("", NewsController.allNews);
newsRouter.get("/:id", NewsController.newsId);
newsRouter.post("", isAdmin, NewsController.creatNews);
newsRouter.delete("/:id", isAdmin, NewsController.removeNews);
newsRouter.put("/:id", isAdmin, NewsController.update);

export default newsRouter;
