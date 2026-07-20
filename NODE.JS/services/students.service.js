import students from '../data/students.js';

export function getAllStudents() {
    return students;
}

export function getStudentById(id) {
    const student = students.find(s => s.id === Number(id));
    return student || null;
}

export function createStudent(studentData) {
    const nextId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;
    
    const newStudent = {
        id: nextId,
        ...studentData
    };
    
    students.push(newStudent);
    return newStudent;
}