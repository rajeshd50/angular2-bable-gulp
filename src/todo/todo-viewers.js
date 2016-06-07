import {
    Component,
    Input,
    Attribute
} from '@angular/core';

import {
	NgFor,
	NgModel,
	NgIf,
	FORM_DIRECTIVES
} from '@angular/common';

import { MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS } from "ng2-material";
import {MD_ICON_DIRECTIVES} from '@angular2-material/icon';
import {MD_CHECKBOX_DIRECTIVES} from '@angular2-material/checkbox';

import {TodoService} from './todo-service';
import {TodoItem} from './todo-item';

import {TodoFilter} from './pipe-todo';

@Component({
    selector: 'view-todos',
    providers: [TodoService],
    pipes: [TodoFilter],
    template: `
  	<div layout="row">
	    <md-content style="width: 100%;overflow: hidden;" layout-padding>
            <p (click)="print()">All your todos</p>
            <table style="width: 100%" cellspacing="0">
            	<tr>
            		<td>
            			<span (click)="setCompletedStatus('completed')">Completed</span>
            			<span (click)="setCompletedStatus('current')">Current</span>
            			<span (click)="setCompletedStatus('all')">All</span>
            		</td>
            	</tr>
                <tr *ngFor="let todo of todos.data|todoFilter:completedStatus:currentList">
                    <td>
                    	<md-checkbox [checked]="todo.completed" (change)="todo.completed = $event.checked" aria-label="Checkbox 1">
				          <span>{{todo.text}}</span>
				        </md-checkbox>
                    </td>
                </tr>
                <tr>
                	<td style="text-align:left;">
                		<button md-fab class="md-primary" aria-label="Use Android">
					      <i md-icon>keyboard_arrow_left</i>
					    </button>
					    <button md-fab class="md-primary" aria-label="Use Android">
					      <i md-icon>keyboard_arrow_right</i>
					    </button>
                	</td>
                </tr>
            </table>
        </md-content>
	</div>`,
	directives: [MATERIAL_DIRECTIVES,MD_ICON_DIRECTIVES,NgFor,NgIf,FORM_DIRECTIVES,MD_CHECKBOX_DIRECTIVES]
})
export class ViewTodos {
	todos = {};
	completedStatus = 'all';
	currentPage = 1;
	maxItemPerPage = 5;

	currentList = {
		count:0
	};
    constructor(todoService: TodoService) {
        this.todoService = todoService;
        this.todos = this.todoService.getAllTodo();
    }

    setCompletedStatus(status) {
    	this.completedStatus = status;
    }

    nextPage() {
    	currentPage++;
    }

    prevPage() {
    	currentPage--;
    }

    print() {
    	console.log(this.todos,this.currentList);
    }
}
