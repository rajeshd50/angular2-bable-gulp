import {
    Component,
    Input,
    Attribute
} from '@angular/core';

import { MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS } from "ng2-material";
import {MD_ICON_DIRECTIVES} from '@angular2-material/icon';

import {AddTodo} from './add-todo';
import {ViewTodos} from './todo-viewers';

@Component({
    selector: 'todo-container',
    template: `
  	<div layout="column" style="height:100%;">
	    <md-content layout-padding>
            <add-todo></add-todo>
            <view-todos></view-todos>
        </md-content>
	</div>`,
	directives: [MATERIAL_DIRECTIVES,MD_ICON_DIRECTIVES,AddTodo,ViewTodos]
})
export class TodoContainer {}
