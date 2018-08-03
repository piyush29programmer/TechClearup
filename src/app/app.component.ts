import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<nav-bar></nav-bar>
  <router-outlet></router-outlet>
  <footer-bar></footer-bar>`
})
export class AppComponent {
  title = 'app';
}
