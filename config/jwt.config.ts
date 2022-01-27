// import required libraries
const jwt = require("jsonwebtoken");
import { Request, Response, NextFunction } from "express";
const utils = require("../util/utils");

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // obtain jwt token
  const token = req.session.jwt;

  if (token == null) return res.sendStatus(401);

  jwt.verify(
    req.session.jwt,
    process.env.ACCESS_TOKEN_SECRET as string,
    (err: any, user: any) => {
      utils.printLog("JWT Authentication", err);

      if (err) return res.sendStatus(403);

      req.session.user = user;

      // next();
      console.log("true");
    },
  );
};

module.exports = authenticateToken;
