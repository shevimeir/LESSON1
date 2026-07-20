import * as studentsController from '../controllers/students.controller.js';
import { Router } from 'express';
import { checkAuthKey } from '../middlewares/auth.middleware.js';

const router = Router();

router.use(checkAuthKey);

router.get('/', studentsController.getAllStudents);
router.get('/:id', studentsController.getStudentById);
router.post('/', studentsController.createStudent);

export default router;