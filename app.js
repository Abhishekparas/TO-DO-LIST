const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadEventListeners();

function loadEventListeners(){
    // add task event
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click',removeTask);
    clearBtn.addEventListener('click',clearTask);
    filter.addEventListener('keyup',filterTask);
}

function addTask(e){
    if(taskInput.value === ''){
        alert('Add a Task');
    }
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';       //secondary content is to put cross symbol on the 'right'
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);

    taskList.appendChild(li);
    taskInput.value = ''
    e.preventDefault();
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are You Sure?'))
        e.target.parentElement.parentElement.remove();
    }
}

function clearTask(){
    // first method
    // taskList.innerHTML = '';

    // faster method
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

function filterTask(e){
    const filterText = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(iter){
        const item = iter.firstChild.textContent;
        if(item.toLowerCase().indexOf(filterText) != -1){
            iter.style.display = 'block';
        }
        else{
            iter.style.display = 'none';
        }
    });
}