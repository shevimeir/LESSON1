import express from 'express';
import * as coursesController from '../controllers/courses.controller.js';

const router = express.Router();

// התאמת הכתובות לפונקציות הבקר
router.get('/', coursesController.getAllCourses);
router.get('/:id', coursesController.getCourseById);
router.post('/', coursesController.createCourse);

export default router;