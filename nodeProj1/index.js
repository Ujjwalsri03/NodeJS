const fs = require('fs');
const path = require('path');
const readline = require('readline');

const tasksFilePath = path.join(__dirname, 'tasks.txt');

if (!fs.existsSync(tasksFilePath)) {
    fs.writeFileSync(tasksFilePath, '', 'utf-8');
}

// Function to add a new task
function addTask(task) {
    fs.appendFileSync(tasksFilePath, `${task}\n`, 'utf-8');
    console.log('Task added successfully.');
}

// Function to view all tasks
function viewTasks() {
    const tasks = fs.readFileSync(tasksFilePath, 'utf-8').trim();
    if (tasks === '') {
        console.log('No tasks available.');
    } else {
        console.log('Tasks:');
        tasks.split('\n').forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    }
}

// Function to mark a task as complete
function markTaskComplete(taskNumber) {
    let tasks = fs.readFileSync(tasksFilePath, 'utf-8').trim().split('\n');
    if (taskNumber > 0 && taskNumber <= tasks.length) {
        tasks[taskNumber - 1] += ' (completed)';
        fs.writeFileSync(tasksFilePath, tasks.join('\n'), 'utf-8');
        console.log(`Task ${taskNumber} marked as complete.`);
    } else {
        console.log('Invalid task number.');
    }
}

// Function to remove a task
function removeTask(taskNumber) {
    let tasks = fs.readFileSync(tasksFilePath, 'utf-8').trim().split('\n');
    if (taskNumber > 0 && taskNumber <= tasks.length) {
        tasks.splice(taskNumber - 1, 1);
        fs.writeFileSync(tasksFilePath, tasks.join('\n'), 'utf-8');
        console.log(`Task ${taskNumber} removed.`);
    } else {
        console.log('Invalid task number.');
    }
}

// Readline interface for user interaction
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log(`
Choose an option:
1. Add a new task
2. View tasks
3. Mark a task as complete
4. Remove a task
5. Exit
`);
    rl.question('Enter your choice: ', (choice) => {
        switch (choice.trim()) {
            case '1':
                rl.question('Enter the task: ', (task) => {
                    addTask(task);
                    showMenu();
                });
                break;
            case '2':
                viewTasks();
                showMenu();
                break;
            case '3':
                rl.question('Enter the task number to mark as complete: ', (taskNumber) => {
                    markTaskComplete(Number(taskNumber));
                    showMenu();
                });
                break;
            case '4':
                rl.question('Enter the task number to remove: ', (taskNumber) => {
                    removeTask(Number(taskNumber));
                    showMenu();
                });
                break;
            case '5':
                console.log('Exiting...');
                rl.close();
                break;
            default:
                console.log('Invalid choice. Please try again.');
                showMenu();
        }
    });
}


showMenu();
