import express from 'express';
import * as mono from "../controllers/monoalpha.controler.js"

const MonoRouter = express.Router();

MonoRouter.post('/encode', mono.monoEncryption);

MonoRouter.post('/decode', mono.monoDecryption);

export default MonoRouter;