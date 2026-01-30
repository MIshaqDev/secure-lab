import express from 'express';
import * as ceaser from '../controllers/ceaser.controller.js';

const CeaserRouter = express.Router();

CeaserRouter.post('/encode', ceaser.ceaserEncryption)

CeaserRouter.post('/decode', ceaser.ceaserDecryption)

export default CeaserRouter;