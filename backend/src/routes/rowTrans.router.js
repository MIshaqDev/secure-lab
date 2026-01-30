import express from 'express';
import * as rT from "../controllers/rowTrans.controller.js";

const RTrouter = express.Router();

RTrouter.post('/encode', rT.encode);
RTrouter.post('/decode', rT.decode);

export default RTrouter;