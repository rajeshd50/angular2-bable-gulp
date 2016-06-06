import {
    Component,
    Input,
    Attribute
} from '@angular/core';

import { MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS } from "ng2-material";
import {MD_ICON_DIRECTIVES} from '@angular2-material/icon';

@Component({
    selector: 'todo-container',
    template: `
  	<div layout="column" style="height:100%;">
	    <md-content layout-padding>
        	<p>My Content here</p>
        </md-content>
	</div>`,
	directives: [MATERIAL_DIRECTIVES,MD_ICON_DIRECTIVES]
})
export class TodoContainer {}
