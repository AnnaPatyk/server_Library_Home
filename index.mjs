import express from "express";
import booksRouter from "./routes/booksRouter.mjs";
import db from "./db/db.mjs";
import cors from "cors";
import newsRouter from "./routes/newsRouter.mjs";
import multer from "multer";

const app = express();

db.on("error", () => console.log("db errore"));

db.on("connected", () => console.log("db connect"));

app.use(express.json());
app.use(cors());

var storage = multer.diskStorage({
  destination: "public/uploads/",
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.json({ key: "value" });
});
app.post("/upload-img", upload.single("image"), function (req, res, next) {
  const file = req.file;
  console.log(file);
  if (!file) {
    res.send("Error");
  } else {
    res.send("OK");
  }
});

app.use("/books", booksRouter);
app.use("/news", newsRouter);
app.use(express.static("public"));

app.listen(4000, () => {
  console.log("server is raning ");
});
