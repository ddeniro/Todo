import {projects, notes, printNotes, printProject, addProject, addTask} from './storage';
import Project from './project';
import Task from './task';

const content = document.getElementById('content');

const clearContent = () => {
    content.innerHTML = '';
    const divList = document.createElement('div');
    divList.id = 'div-list';
    const divTitle = document.createElement('div');
    divTitle.id = 'div-title';

    const divItems = document.createElement('div');
    divItems.id = 'div-items';

    content.appendChild(divList);
    content.appendChild(divItems);
    
}

const renderProjectList = () => {
    const divList = document.getElementById('div-list');
    clearDivItems();

    const divListHead = document.createElement('div');
    divListHead.id = 'div-list-head';

    const projectsList = document.createElement('div');
    projectsList.id = 'projects-list';

    const addProjectSvg = document.createElement('svg');
    addProjectSvg.className = 'svg-btn';
    addProjectSvg.innerHTML = '<svg id="svg-add" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>'


    const title = document.createElement('h2');
    title.innerText = 'Projects';

    divListHead.appendChild(title);
    divListHead.appendChild(addProjectSvg);
    divList.appendChild(divListHead);
    divList.appendChild(projectsList);

    projects.forEach(project => { 
        const divProject = document.createElement('div');
        divProject.className = 'div-project';
        const projectTitle = document.createElement('p');
        projectTitle.innerText = project.title;
        const projectDate = document.createElement('p');
        projectDate.innerText = project.dueDate;
        projectDate.className = 'project-date';

        divProject.appendChild(projectTitle);
        divProject.appendChild(projectDate);

        projectsList.appendChild(divProject);
        divProject.addEventListener('click', () => {
            renderProjectTasks(project);
        })
    }); 

    addProjectSvg.addEventListener('click', () => {
        console.log('WOOOO!');
        renderPopUp(projects,true);
    })
}

const renderProjectTasks = (project) => {
    clearDivItems();
    const divItems = document.getElementById('div-items');
    const divItemsHeader = document.getElementById('div-items-header');
    const addTaskSvg = document.createElement('svg');
    addTaskSvg.id = 'addtask-btn'
    addTaskSvg.className = 'svg-btn';
    addTaskSvg.innerHTML = '<svg id="svg-add" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>' 

    const divTasks = document.createElement('div');
    divTasks.id = 'div-tasks'

    divItems.appendChild(divTasks);
    //create each task in the DOM.
    project.tasks.forEach(task => { 
        const divTask = document.createElement('div');
        divTask.className = 'div-task';

        const taskTitle = document.createElement('h3');
        taskTitle.innerText = task.title;

        //const priority = document.createElement('p');
        //priority.innerText = task.priority;
        divTask.appendChild(taskTitle);
        //divTask.appendChild(priority);
        const priority = task.priority;
        if (priority === 'high') {
            divTask.classList.add('high');
        }
        if (priority === 'medium') {
            divTask.classList.add('medium');
        }
        if (priority === 'low') {
            divTask.classList.add('low');
        }
        if(task.dueDate != null) {
            const dueDate = document.createElement('p');
            dueDate.innerText = task.dueDate;
            divTask.appendChild(dueDate);
        }
        divTasks.appendChild(divTask);
    })

    divItemsHeader.appendChild(addTaskSvg);

    addTaskSvg.addEventListener('click', () => {
        renderPopUp(project, false);
    })
}

const clearDivItems = () => {
    const divItems = document.getElementById('div-items');
    divItems.innerHTML = '';
    const divItemsTitle = document.createElement('h2');

    const divItemsHeader = document.createElement('div');
    divItemsHeader.id = 'div-items-header';

    divItemsTitle.innerText = 'Tasks';

    divItemsHeader.appendChild(divItemsTitle);

    divItems.appendChild(divItemsHeader);
}

const renderPopUp =  (project, isProject) => {
    clearPopUp();
    const divPopUp = document.createElement('div');
    divPopUp.id= 'div-popup';
    const itemTitle = document.createElement('p');
    const itemTitleField = document.createElement('input');

    const dueDateTitle = document.createElement('p');
    dueDateTitle.innerText = 'Optional due date';
    const dueDateField = document.createElement('input');
    dueDateField.type = 'date';

    const btnCreate = document.createElement('button');
    btnCreate.innerText = 'Add';

    const descriptionTitle = document.createElement('p');
    descriptionTitle.innerText = 'Description';
    const descriptionField = document.createElement('input');
    descriptionField.placeholder = 'A description about some project.';

    divPopUp.appendChild(itemTitle);
    divPopUp.appendChild(itemTitleField);


    if (isProject) {
        console.log(isProject);
        itemTitle.innerText = 'Project Title';
        itemTitleField.placeholder = 'Some Project';

        divPopUp.appendChild(descriptionTitle);
        divPopUp.appendChild(descriptionField);
    }
    else {
        itemTitle.innerText = 'Task Title';
        itemTitleField.placeholder = 'Do laundry';
        const priorityTitle = document.createElement('p');
        priorityTitle.innerText = 'Priority';

        const selectPriority = document.createElement('select');
        const highPriority = document.createElement('option');
        const medPriority = document.createElement('option');
        const lowPriority = document.createElement('option');

        highPriority.value = 'high';
        highPriority.innerText = 'High';
        medPriority.value = 'medium';
        medPriority.innerText = 'Medium';
        lowPriority.value = 'low';
        lowPriority.innerText = 'Low';

        selectPriority.appendChild(highPriority);
        selectPriority.appendChild(medPriority);
        selectPriority.appendChild(lowPriority);
        selectPriority.id = 'select-priority'

        divPopUp.appendChild(priorityTitle);
        divPopUp.appendChild(selectPriority);

    }
    divPopUp.appendChild(dueDateTitle);
    divPopUp.appendChild(dueDateField);

    const divButtons = document.createElement('div');
    divButtons.id = 'div-popup-btns';
    const acceptSvg = document.createElement('div');
    acceptSvg.className = 'svg-btn';
    const closeSvg = document.createElement('div');
    closeSvg.className = 'svg-btn';
    acceptSvg.innerHTML = '' + '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>'
    closeSvg.innerHTML = '' + '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>'
    divButtons.appendChild(acceptSvg);
    divButtons.appendChild(closeSvg);

    divPopUp.appendChild(divButtons);
    
    document.body.appendChild(divPopUp);

    acceptSvg.addEventListener('click', () => {
        //This needs to handle TASK AND PROJECT creation. Currently it only handles creating new projects.
        if (isProject) {
            console.log('Adding new Project');
            const newProject = new Project(itemTitleField.value, descriptionField.value, dueDateField.value );
            console.log('newProject:', newProject);
            addProject(newProject);
        }
        else {
            const selectPriority = document.getElementById('select-priority');
            console.log('Adding new Task.');
            const newTask = new Task(itemTitleField.value, selectPriority.value, dueDateField.value, false);
            addTask(project, newTask);
            
        }
        console.log('WOOO');

        clearPopUp();
        clearContent();
        renderProjectList();
    })

    closeSvg.addEventListener('click', () => {
        clearPopUp();
    })
}

const clearPopUp = () => {
    const divPopUp = document.getElementById('div-popup');
    if (divPopUp) {
        document.body.removeChild(divPopUp);
    }
}

export {clearContent, renderProjectList};