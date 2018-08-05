'use strict';
window.onload = function () {
    const app = new Vue({
        el: '#app',
        data: () => {
            return {
                nextTaskId: 1,
                selectedTaskId: '',
                newTask: {
                    title: '',
                },
                tasks: []
            }
        },
        methods: {
            load: function () {
                this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
                this.nextTaskId = this.tasks.length;
            },
            save: function () {
                localStorage.removeItem('tasks');
                localStorage.setItem('tasks', JSON.stringify(this.tasks));
            },
            addNewTask: function () {
                this.tasks.unshift({
                    id: this.nextTaskId++,
                    title: this.newTask.title,
                    dueDate: Date.now(),
                    note: '',
                });
                this.newTask.title = '';
                this.save();
            },
            removeTask: function (key) {
                this.tasks.splice(key, 1);
                this.save();
            },
            selectTask: function (key) {
                this.selectedTaskId = key;
            }
        }
    });
    app.load();
};