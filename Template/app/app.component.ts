import { Component } from '@angular/core';
import { TutorialComponent } from './tutorial.component'

@Component({
  selector: 'my-app',
  template: `<h1>Hello World</h1>
  				<h4>Header 4 from app component</h4>
  				<my-tutorial></my-tutorial>`
  
  directives: [TutorialComponent]
})
export class AppComponent { }
