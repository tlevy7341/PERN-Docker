/** Imports */
import express, { Express } from 'express';
import {routes} from "./routes/route";
import helmet from "helmet";
import http from "http";
const cors = require('cors');
const Pool = require('pg').Pool

/** App setup */
const router: Express = express();
router.use(express.json());
router.use(express.urlencoded({ extended: false }));
router.use(helmet());
router.use(cors());

/** Connect to DB */
const pool = new Pool({
    user: process.env.db_user,
    password: process.env.db_password,
    host: process.env.db_host,
    port: 5432,
    database: process.env.db_name
});

/** Routes */
router.use(routes);

/** Server */
const httpServer = http.createServer(router);
const PORT: string = '3001'
httpServer.listen(PORT, ()=> {
    console.log(`server running at http://localhost:${PORT}`);
})
