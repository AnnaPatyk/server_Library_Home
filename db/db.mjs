import mongoose from "mongoose";
import { login } from "./login";

mongoose.connect(
  `mongodb+srv://${login}@cluster0.f26h7ft.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
);
export default mongoose.connection;
