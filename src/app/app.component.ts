import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>{{title}}</h1>
      <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = '1300-app';
}
