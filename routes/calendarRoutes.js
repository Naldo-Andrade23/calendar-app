// import express from 'express';
// import { consultarHorarios } from '../controllers/calendarController.js';

// const router = express.Router();

// router.get('/freebusy', consultarHorarios);

// export default router;

import express from 'express';
import { obterEventos, excluirEvento } from '../controllers/calendarController.js';

const router = express.Router();

router.get('/eventos', obterEventos);
router.delete('/cancelar', excluirEvento);

export default router;
