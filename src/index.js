import {loadStorage} from './storage';
import {clearContent, renderProjectList} from './DOMController';

loadStorage();

const btnProjects = document.getElementById('nav-projects');

const btnNotes = document.getElementById('nav-notes');

btnProjects.addEventListener('click', () => {
    clearContent();
    renderProjectList();
})

btnNotes.addEventListener('click', () => {
    clearContent();
})

clearContent();