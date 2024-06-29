import News from "../models/news.mjs";

const allNews = async (req, res) => {
  const news = await News.find({});
  res.json(news);
};

const newsId = async (req, res) => {
  const id = req.params.id;
  const news = await News.indById(id);
  res.json(news);
};

const creatNews = async (req, res) => {
  const data = req.body;
  const news = new News(data);
  await news.save();
  res.send(news);
};

const removeNews = async (req, res) => {
  const id = req.params.id;
  await News.findByIdAndDelete(id);
  res.send({ id });
};

const update = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  await News.findByIdAndUpdate(id, data);
  res.send(id);
};

export default { allNews, newsId, creatNews, removeNews, update };
