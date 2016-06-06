import {TodoItem} from './todo-item';

export class TodoService {
	constructor() {
		this.storageName = 'ang-todo-app';
		this.todos = new Array();
	}

	addTodo(todo: TodoItem) {
		this.todos.push(todo);
		console.log(this.todos);
	}

	getAllTodo() {
		return this.todos;
	}
}