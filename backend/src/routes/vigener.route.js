import express from 'express';
import * as vigener from "../controllers/vigener.controller.js"

const VigenerRouter = express.Router();

VigenerRouter.post('/encode',vigener.encode);
VigenerRouter.post('/decode',vigener.decode);

export default VigenerRouter;