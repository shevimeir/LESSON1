import express from 'express';
import * as studentsController from '../controllers/students.controller.js';

const router = express.Router();

router.get('/', studentsController.getAllStudents);
router.get('/:id', studentsController.getStudentById);
router.post('/', studentsController.createStudent);

export default router;