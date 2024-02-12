const taskList = document.getElementById('taskList');

// marking tasks as completed.
taskList.addEventListener('click', function(event) {
    const listItem = event.target.closest('li');
    if (listItem) {
        listItem.classList.toggle('completed');
    }
});

// deleting completed tasks.
document.getElementById('deleteCompletedButton').addEventListener('click', function() {
    const completedTasks = document.querySelectorAll('.completed');
    completedTasks.forEach(task => {
        task.remove();
    });
});

// Deleting individual tasks.
taskList.addEventListener('click', function(event) {
    if (event.target.classList.contains('deleteButton')) {
        event.target.parentNode.remove(); 
    }
});




document.getElementById('addButton').addEventListener('click', addTask);

document.getElementById('task').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Adding tasks.
function addTask() {
    let taskInput = document.getElementById('task').value;
    
    if (taskInput.trim() !== '') {
        let newTask = document.createElement('li');
        newTask.classList.add('task-item');
        newTask.innerHTML = `
            <span>${taskInput}</span>
            <button class="deleteButton">Delete</button>
        `;
        taskList.appendChild(newTask);
        taskInput = '';
    } else {
        window.alert('Invalid Input !!! - Text Field is Empty');
        return;
    }
}
