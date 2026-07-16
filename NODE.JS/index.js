const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const coursesData = require('./courses');
const studentsData = require('./students');

let subscriptionsData = [
  { id: 1, studentId: 1, courseId: 1 },
  { id: 2, studentId: 2, courseId: 2 }
];

app.get('/', (req, res) => {
    res.json({
        status: "running",
        message: "Server is working beautifully!"
    });
});

app.get('/courses', (req, res) => {
    res.json(coursesData); 
});

app.get('/students', (req, res) => {
    res.json(studentsData); 
});

app.get('/subscriptions', (req, res) => {
    res.json(subscriptionsData);
});

app.get('/courses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const course = coursesData.find(c => c.id === id);
  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }
  res.json(course);
});

app.get('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = studentsData.find(s => s.id === id);
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  res.json(student);
});

app.get('/subscriptions/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const sub = subscriptionsData.find(s => s.id === id);
  if (!sub) {
    return res.status(404).json({ message: "Subscription not found" });
  }
  res.json(sub);
});

app.post('/courses', (req, res) => {
  const { name, duration } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Course name is required" });
  }
  const newCourse = {
    id: coursesData.length + 1,
    name: name,
    duration: duration || "unknown"
  };
  coursesData.push(newCourse);
  res.status(201).json(newCourse);
});

app.post('/students', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
  }
  const newStudent = {
    id: studentsData.length + 1,
    name: name,
    email: email
  };
  studentsData.push(newStudent);
  res.status(201).json(newStudent);
});

app.post('/subscriptions', (req, res) => {
  const { studentId, courseId } = req.body;
  if (!studentId || !courseId) {
    return res.status(400).json({ message: "studentId and courseId are required" });
  }
  const newSubscription = {
    id: subscriptionsData.length + 1,
    studentId: parseInt(studentId),
    courseId: parseInt(courseId)
  };
  subscriptionsData.push(newSubscription);
  res.status(201).json(newSubscription);
});

app.put('/courses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const course = coursesData.find(c => c.id === id);
  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }
  const { name, duration } = req.body;
  if (name) course.name = name;
  if (duration) course.duration = duration;
  res.json(course);
});

app.put('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = studentsData.find(s => s.id === id);
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  const { name, email } = req.body;
  if (name) student.name = name;
  if (email) student.email = email;
  res.json(student);
});

app.put('/subscriptions/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const sub = subscriptionsData.find(s => s.id === id);
  if (!sub) {
    return res.status(404).json({ message: "Subscription not found" });
  }
  const { studentId, courseId } = req.body;
  if (studentId) sub.studentId = parseInt(studentId);
  if (courseId) sub.courseId = parseInt(courseId);
  res.json(sub);
});

app.delete('/courses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = coursesData.findIndex(c => c.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Course not found" });
  }
  const deletedCourse = coursesData.splice(index, 1)[0];
  res.json({ message: "Course deleted successfully", deletedCourse });
});

app.delete('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = studentsData.findIndex(s => s.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }
  const deletedStudent = studentsData.splice(index, 1)[0];
  res.json({ message: "Student deleted successfully", deletedStudent });
});

app.delete('/subscriptions/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = subscriptionsData.findIndex(s => s.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Subscription not found" });
  }
  const deletedSub = subscriptionsData.splice(index, 1)[0];
  res.json({ message: "Subscription deleted successfully", deletedSub });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});