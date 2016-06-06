export class TodoItem {
	constructor(text='',completed=false,date=new Date()) {
		this.todo = {
			text:text,
			completed:completed,
			date: date
		};
	}

	getTodo() {
		return this.todo;
	}
}