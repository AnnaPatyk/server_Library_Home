import express from "express";
import NewsController from "../controllers/newsController.mjs";

const newsRouter = express.Router();

newsRouter.get("", NewsController.allNews);
newsRouter.get("/:id", NewsController.newsId);
newsRouter.post("", NewsController.creatNews);
newsRouter.delete("/:id", NewsController.removeNews);
newsRouter.put("/:id", NewsController.update);

export default newsRouter;
