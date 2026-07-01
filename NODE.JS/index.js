const http = require('http');

const courses = [
    { id: 101, name: "HTML & CSS Basics", description: "Learn the foundation of web development." },
    { id: 102, name: "JavaScript Advanced", description: "Master closures, promises, and async/await." },
    { id: 103, name: "Node.js Backend", description: "Build scalable servers and APIs from scratch." }
];

const server = http.createServer(async (req, res) => {
    const { default: chalk } = await import('chalk');

    console.log(chalk.yellow.bold('\n--- New Request Received! Printing Courses List: ---'));
    console.log(chalk.magenta(JSON.stringify(courses, null, 2)));
    console.log(chalk.yellow.bold('---------------------------------------------------\n'));

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(courses, null, 2));
});

server.listen(3000, async () => {
    const { default: chalk } = await import('chalk');

    console.log(chalk.blue('=============================================='));
    console.log(chalk.green('🚀 Server is successfully running!'));
    console.log(chalk.cyan('🌍 Visit: http://localhost:3000/'));
    console.log(chalk.blue('=============================================='));
});