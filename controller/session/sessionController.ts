// import required libraries
import { Request, Response, NextFunction } from "express";

const test = (req: Request, res: Response) => {
  res.send("hello world");
};

// export functions
module.exports = { test };
