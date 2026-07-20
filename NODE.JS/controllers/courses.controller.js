import * as coursesService from '../services/courses.service.js';

export function getAllCourses(req, res) {
    try {
        const courses = coursesService.getAllCourses();
        return res.status(200).json(courses);
    } catch (error) {
        return res.status(500).json({ message: "שגיאה פנימית בשרת", error: error.message });
    }
}

export function getCourseById(req, res) {
    try {
        const { id } = req.params;
        const course = coursesService.getCourseById(id);
        
        if (!course) {
            return res.status(404).json({ message: "הקורס המבוקש לא נמצא" });
        }
        
        return res.status(200).json(course);
    } catch (error) {
        return res.status(500).json({ message: "שגיאה פנימית בשרת", error: error.message });
    }
}

export function createCourse(req, res) {
    try {
        const courseData = req.body;
        
        if (!courseData.name) {
            return res.status(400).json({ message: "שם הקורס הוא שדה חובה" });
        }
        
        const newCourse = coursesService.createCourse(courseData);
        return res.status(201).json(newCourse);
    } catch (error) {
        return res.status(500).json({ message: "שגיאה פנימית בשרת", error: error.message });
    }
}