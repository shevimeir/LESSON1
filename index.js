const express = require('express'); 
const app = express(); 
const port = 3000; 

const coursesData = require('./courses');
const studentsData = require('./students');
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
app.get('/test-students', (req, res) => {
    res.json(studentsData);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});