import express from 'express';
import courseRouter from './routes/courses.routes.js';
import studentRouter from './routes/students.routes.js';
import subscriptionRouter from './routes/subscriptions.routes.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/courses', courseRouter);
app.use('/students', studentRouter);
app.use('/subscriptions', subscriptionRouter);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});