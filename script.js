// Selecting task list once and reusing it
const taskList = document.getElementById('taskList');

// marking tasks as completed
taskList.addEventListener('click', function(event) {
    const listItem = event.target.closest('li');
    if (listItem) {
        listItem.classList.toggle('completed');
    }
});

// deleting completed tasks
 document.getElementById('deleteCompletedButton').addEventListener('click', function(){
    const completedTasks = document.querySelectorAll('.completed');
    completedTasks.forEach(task => {
        task.remove();
    });
});


// To add document by either pressing the enter button or by clicking on the add task button.
document.getElementById('task').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
document.getElementById('addButton').addEventListener('click', addTask);

function addTask() {
    let taskInput = document.getElementById('task').value;
    
    if (taskInput.trim() !== '') {
        let newTask = document.createElement('li');
        newTask.appendChild(document.createTextNode(taskInput));
        taskList.appendChild(newTask);
        taskInput = '';
    } else {
        window.alert('Invalid Input !!! - Text Field is Empty');
        return;
    }
}
