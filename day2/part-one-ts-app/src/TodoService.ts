import { data } from './Data';
import { Todo } from './TodoComponent';


export class TodoService {
  

    listTodos(): Promise<Todo[]> {
        return new Promise((resolve) => {
            resolve(data);
        });
    }

    saveTodo(todo: Todo): Promise<Todo[]> {
        return new Promise((resolve) => {
            data.push(todo);
            resolve(data);
        });
    }

    updateTodo(todo: Todo): Promise<Todo[]> {
        return new Promise((resolve) => {
            const index =  data.findIndex((i) => i.id == todo.id);
            data[index]= todo;
            resolve(data);   
        });
    }

    listCompletedTodos(): Promise<Todo[]> {
        return new Promise((resolve) => {
            const completedList = data.filter((i) => i.completed == true)
            resolve(completedList);
        });
    }

}