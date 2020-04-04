import { TodoService } from "./TodoService";

export class Todo {
    constructor(
        public userId: number = 1,
        public id: number = 1,
        public title: string = `delectus aut autem`,
        public completed: boolean = false
    ) { }
}

class TodoComponent {
    constructor(private todoservice: TodoService) { }

    async list() {
        const list = await this.todoservice.listTodos();
        return list;
    }

    async save(todo: Todo) {
        await this.todoservice.saveTodo(todo);
    }

    async update(todo: Todo) {
        await this.todoservice.updateTodo(todo);
    }

    async listCompletedTodos() {
        const list = await this.todoservice.listCompletedTodos();
        return list;
    }
}



const todoinstance = new TodoComponent(new TodoService());

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
})
todoinstance.list().then(i => console.log(i));

todoinstance.listCompletedTodos().then(i => console.log(i));