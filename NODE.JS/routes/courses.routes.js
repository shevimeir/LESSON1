
import * as coursesController from '../controllers/courses.controller.js';
import { Router } from 'express';
import { checkAuthKey } from '../middlewares/auth.middleware.js';

const router = Router();

router.use(checkAuthKey);router.get('/', coursesController.getAllCourses);
router.get('/:id', coursesController.getCourseById);
router.post('/', coursesController.createCourse);

export default router;