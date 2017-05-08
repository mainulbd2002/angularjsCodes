import { Component } from '@angular/core';
import { TutorialComponent } from './tutorial.component'

@Component({
  selector: 'my-app',
  template: `<h1>Hello World</h1>
  				<my-tutorial></my-tutorial>`
  directives: [TutorialComponent]
})
export class AppComponent { }
