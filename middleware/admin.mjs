import User from "../models/user.mjs";
import { isAuth } from "./auth.mjs";

export const isAdmin = async (req, res, next) => {
  isAuth(req, res, next);

  const user = await User.findById(req.userId);
  if (!user.is_admin) {
    return res.status(400).json({
      status: "error",
      message: "Доступ не дозволено",
    });
  }

  next();
};
