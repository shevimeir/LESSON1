import courses from '../data/courses.js';

export function getAllCourses() {
    return courses;
}

export function getCourseById(id) {
    const course = courses.find(c => c.id === Number(id));
    return course || null;
}

export function createCourse(courseData) {
    const nextId = courses.length > 0 ? Math.max(...courses.map(c => c.id)) + 1 : 1;
    
    const newCourse = {
        id: nextId,
        ...courseData
    };
    
    courses.push(newCourse);
    return newCourse;
}