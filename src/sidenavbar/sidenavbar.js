import {
    Component,
    Input,
    Attribute
} from '@angular/core';

import { MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS } from "ng2-material";
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_ICON_DIRECTIVES} from '@angular2-material/icon';

import {TodoContainer} from '../todo/todo-container';

@Component({
    selector: 'side-nav-bar',
    template: `
  	<div layout="column" style="height:100%;">
	    <md-sidenav-layout style="height:100%;">
	        <md-sidenav #left [opened]="true" mode="side" layout-padding>
	            <h2>Left Sidenav.</h2>
	            <br>
	            <button md-raised-button class="md-raised md-primary" #mybutton (click)="left.close()">Close</button>
	        </md-sidenav>
	        <md-content layout-padding>
	        	<button md-fab class="md-primary" (click)="left.toggle()" aria-label="Use Android">
			      <i md-icon>menu</i>
			    </button>
			    <todo-container></todo-container>
	        </md-content>
	    </md-sidenav-layout>
	</div>`,
	directives: [TodoContainer,MD_SIDENAV_DIRECTIVES,MATERIAL_DIRECTIVES,MD_ICON_DIRECTIVES]
})
export class SideNavBar {}
