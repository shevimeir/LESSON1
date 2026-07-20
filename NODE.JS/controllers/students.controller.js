import * as studentsService from '../services/students.service.js';

export function getAllStudents(req, res) {
    try {
        const students = studentsService.getAllStudents();
        return res.status(200).json(students);
    } catch (error) {
        return res.status(500).json({ message: "שגיאה פנימית בשרת", error: error.message });
    }
}

export function getStudentById(req, res) {
    try {
        const { id } = req.params;
        const student = studentsService.getStudentById(id);
        
        if (!student) {
            return res.status(404).json({ message: "הסטודנט המבוקש לא נמצא" });
        }
        
        return res.status(200).json(student);
    } catch (error) {
        return res.status(500).json({ message: "שגיאה פנימית בשרת", error: error.message });
    }
}

export function createStudent(req, res) {
    try {
        const studentData = req.body;
        
        if (!studentData.name) {
            return res.status(400).json({ message: "שם הסטודנט הוא שדה חובה" });
        }
        
        const newStudent = studentsService.createStudent(studentData);
        return res.status(201).json(newStudent);
    } catch (error) {
        return res.status(500).json({ message: "שגיאה פנימית בשרת", error: error.message });
    }
}