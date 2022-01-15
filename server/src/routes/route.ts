import express from "express";
import {getAll} from "../controllers/controller";
export const routes = express.Router();

routes.get('/',getAll);