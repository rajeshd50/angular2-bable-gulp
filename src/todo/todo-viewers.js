import {
    Component,
    Input,
    Attribute
} from '@angular/core';

import { MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS } from "ng2-material";
import {MD_ICON_DIRECTIVES} from '@angular2-material/icon';

import {TodoService} from './todo-service';
import {TodoItem} from './todo-item';

@Component({
    selector: 'view-todos',
    providers: [TodoService],
    template: `
  	<div layout="row">
	    <md-content style="width: 100%" layout-padding>
            <p>All your todos</p>
        	<form>
                <table style="width: 100%" cellspacing="0">
                <tr *ngFor="#todo of todoService.getAllTodo()">
                    <td>
                    	{{todo.text}}
                    </td>
                </tr>
                </table>
            </form>
        </md-content>
	</div>`,
	directives: [MATERIAL_DIRECTIVES,MD_ICON_DIRECTIVES]
})
export class ViewTodos {
    constructor(todoService: TodoService) {
        this.todoService = todoService;
    }
}
