import {
    Component,
    Input,
    Attribute
} from '@angular/core';

import { MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS } from "ng2-material";
import {MD_ICON_DIRECTIVES} from '@angular2-material/icon';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';

import {TodoService} from './todo-service';
import {TodoItem} from './todo-item';

@Component({
    selector: 'add-todo',
    providers: [TodoService],
    template: `
  	<div layout="row">
	    <md-content style="width: 100%" layout-padding>
            <p>Add a todo</p>
        	<form>
                <table style="width: 100%" cellspacing="0">
                <tr>
                    <td><md-input style="width: 100%" placeholder="Todo" [(ngModel)]="todoText"></md-input></td>
                    <td><button md-raised-button [disabled]="todoText==''" class="md-raised md-primary" #addTodo (click)="addNewTodo()">Add</button></td>
                </tr>
                </table>
            </form>
        </md-content>
	</div>`,
	directives: [MATERIAL_DIRECTIVES,MD_ICON_DIRECTIVES,MD_INPUT_DIRECTIVES]
})
export class AddTodo {
    constructor(todoService: TodoService) {
        this.todoText = '';
        this.todoService = todoService;
    }
    addNewTodo() {
        if(this.todoText=='') {
            return;
        }
        let todo = new TodoItem(this.todoText);
        this.todoService.addTodo(todo);
        this.todoText = '';
    }
}
