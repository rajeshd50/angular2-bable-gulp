import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'todoFilter',pure:false})
export class TodoFilter implements PipeTransform {
  transform(todoArray,completedStatus,currentList) {
  	let res = [];
  	if (todoArray == null) {
      return null;
    }
  	for(let todoIndex in todoArray) {
  		let todo = todoArray[todoIndex];

  		if(completedStatus=='all') {
  			res.push(todo);
  		} else if(completedStatus=='completed') {
  			if(todo.completed) {
  				res.push(todo);
  			}
  		} else {
  			if(!todo.completed) {
  				res.push(todo);
  			}
  		}
  	}
  	currentList.count = res.length;
  	return res;
  }
}