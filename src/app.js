import {
  Component,
  Input,
  Attribute
} from '@angular/core';
import {
  Routes,
  Route,
  ROUTER_PROVIDERS,
  ROUTER_DIRECTIVES
} from '@angular/router';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material";

import {SideNavBar} from './sidenavbar/sidenavbar';

// import {Greeter} from './services';

// @Component({
//   selector: 'hello',
//   template: '<p>{{ message }}</p>'
// })
// export class Hello {
//   constructor(greeter: Greeter) {
//     this.message = greeter.say('hello', 'Angular 2');
//   }
// }

// @Component({
//   selector: 'ciao',
//   template: '<p>{{ message }}</p>'
// })
// export class Ciao {
//   constructor(greeter: Greeter) {
//     this.greeter = greeter;
//   }

//   routerOnActivate(curr, prev, currTree, prevTree) {
//     this.message = this.greeter.say('ciao', curr.getParam('name'));
//   }
// }
// <router-outlet></router-outlet>

@Component({
  selector: 'linker',
  template: '<p><a [href]="url" [title]="name">{{ name }}</a></p>'
})
export class Linker {
  @Input() url;

  constructor(@Attribute('name') name) {
    this.name = name;
  }
}

@Component({
  selector: 'todo-app',
  // viewProviders: [Greeter],
  directives: [ROUTER_DIRECTIVES, Linker,SideNavBar,MATERIAL_DIRECTIVES],
  template: `
    <side-nav-bar></side-nav-bar>
  `
})
// @Routes([
//   new Route({ path: '/', component: Hello }),
//   new Route({ path: '/ciao/:name', component: Ciao })
// ])
export class TodoApp {
}
