import {TodoItem} from './todo-item';

let instance = null;

export class TodoService {
	todos = {
		data:[]
	};
	constructor() {
		if(!instance){
            instance = this;
        }
		this.storageName = 'ang-todo-app';

		return instance;
	}

	addTodo(todo: TodoItem) {
		this.todos.data.push(todo.getTodo());
	}

	getAllTodo() {
		return this.todos;
	}
}