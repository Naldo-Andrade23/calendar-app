import express from 'express';
import { consultarHorarios } from '../controllers/calendarController.js';

const router = express.Router();

router.get('/freebusy', consultarHorarios);

export default router;
