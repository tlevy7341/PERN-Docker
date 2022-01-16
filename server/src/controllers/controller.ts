/** Imports */
import {Request, Response} from "express";

/** Get all items */
export const getAll = (req: Request, res: Response) => {
  return res.status(200).json({'message': 'Hello World'})
};