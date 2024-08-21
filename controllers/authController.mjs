import User from "../models/user.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  const findUser = await User.findOne({ email: req.body.email });
  if (findUser) {
    return res.status(400).json({
      errore: true,
      message: "Користувач вже існує",
    });
  } else {
    const user = new User(req.body);
    await user.save();
    res.send(user);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    return res.status(404).json({
      errore: true,
      errorFiled: "email",
      message: "Користувача не існує",
    });
  }

  const match = await bcrypt.compare(password, findUser.password);
  if (!match) {
    return res.status(404).json({
      errore: true,
      errorFiled: "password",
      message: "Пароль не коректний",
    });
  }

  const token = jwt.sign({ userId: findUser._id }, "randomPrivateKey", {
    expiresIn: "24h",
  });

  res.json({
    user: findUser,
    token: token,
  });
};

const getAuthUser = async (req, res) => {
  const user = await User.findById(req.userId);

  res.send(user);
};

export default {
  register,
  login,
  getAuthUser,
};
