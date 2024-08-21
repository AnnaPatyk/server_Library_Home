import mongoose from "mongoose";

mongoose.connect(
  `mongodb+srv://tehmag725077:61124577Anna@cluster0.f26h7ft.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
);
export default mongoose.connection;
