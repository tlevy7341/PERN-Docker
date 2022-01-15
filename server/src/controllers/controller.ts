import {Response, Request} from "express";

export const getAll = (req: Request, res: Response) => {
    return res.status(200).json({'message': 'Hello World'});
};

