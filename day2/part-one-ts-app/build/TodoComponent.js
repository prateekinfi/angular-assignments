"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoService_1 = require("./TodoService");
class Todo {
    constructor(userId = 1, id = 1, title = `delectus aut autem`, completed = false) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}
exports.Todo = Todo;
class TodoComponent {
    constructor(todoservice) {
        this.todoservice = todoservice;
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const list = yield this.todoservice.listTodos();
            return list;
        });
    }
    save(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.todoservice.saveTodo(todo);
        });
    }
    update(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.todoservice.updateTodo(todo);
        });
    }
    listCompletedTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            const list = yield this.todoservice.listCompletedTodos();
            return list;
        });
    }
}
const todoinstance = new TodoComponent(new TodoService_1.TodoService());
todoinstance.save({
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
});
todoinstance.update({
    userId: 1,
    id: 2,
    title: "changed text",
    completed: false,
});
todoinstance.list().then(i => console.log(i));
console.log("##############################################################");
todoinstance.listCompletedTodos().then(i => console.log(i));
