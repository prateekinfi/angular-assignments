"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Data_1 = require("./Data");
class TodoService {
    listTodos() {
        return new Promise((resolve) => {
            resolve(Data_1.data);
        });
    }
    saveTodo(todo) {
        return new Promise((resolve) => {
            Data_1.data.push(todo);
            resolve(Data_1.data);
        });
    }
    updateTodo(todo) {
        return new Promise((resolve) => {
            const index = Data_1.data.findIndex((i) => i.id == todo.id);
            Data_1.data[index] = todo;
            resolve(Data_1.data);
        });
    }
    listCompletedTodos() {
        return new Promise((resolve) => {
            const completedList = Data_1.data.filter((i) => i.completed == true);
            resolve(completedList);
        });
    }
}
exports.TodoService = TodoService;
