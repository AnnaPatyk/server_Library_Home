import jwt from "jsonwebtoken";

export const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const verifyToken = jwt.verify(token, "randomPrivateKey");
    req.userId = verifyToken.userId;
    next();
  } catch {
    res.status(400).json({
      status: "error",
      message: "невірний токен",
    });
  }
};
