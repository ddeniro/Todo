class Project {
    constructor(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }
}

export default Project;