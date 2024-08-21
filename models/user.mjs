import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const schema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: { type: String, min: 5 },
  is_admin: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
});

schema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

const User = mongoose.model("User", schema);
export default User;
