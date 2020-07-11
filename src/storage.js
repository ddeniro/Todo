import Project from './project';
import Task from './task';

let projects = [];
let notes = [];

const addProject = (project) => {
    console.log('addProject: adding ' + project);
    projects.push(project);
    localStorage.projects = JSON.stringify(projects);
}

const addNote = (note) => {
    console.log('addNote called');
    notes.push(note);
    localStorage.notes = JSON.stringify(notes);
}

const addTask = (project, task) => {
    console.log(`addTask(): adding ${task} to ${project}`);
    project.tasks.push(task);
    localStorage.projects = JSON.stringify(projects);
}


const loadStorage = () => {
    //first visit
    if (localStorage.projects === undefined && localStorage.notes === undefined) {
        console.log('first time visiting.'); //!
        const sampleProject = new Project('Todo List', 'Odin Project Todo list', '2020-07-15');
        const sampleTask = new Task('Notes Section', 'medium', '2020-07-12');
        sampleProject.addTask(sampleTask);
        addProject(sampleProject);

        const sampleNote = "I've been watching a lot of videos about mechanical keyboards. There are so many kinds of switches with all of their different sounds and tactile feels. There are tons of keycaps which means that the customization and personalization is practically unlimited. However, most things are done in small batches when manufactured, which means that things are often really expensive.";
        addNote(sampleNote);

    }
    else {
        projects = JSON.parse(localStorage.projects);
        notes = JSON.parse(localStorage.notes);
    }
}

//DEBUG

const printProject = () => {
    console.log('Projects:');
    console.table(projects);
}

const printNotes = () => {
    console.log('Notes:');
    console.table(notes);
}


export {printProject, printNotes, loadStorage, addProject, addNote, projects, notes}