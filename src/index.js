import 'babel-polyfill';
import 'zone.js/dist/zone';

import {provide,enableProdMode} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {TodoApp} from './app';

enableProdMode();
bootstrap(TodoApp, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy })
]).catch(err => console.error(err));
