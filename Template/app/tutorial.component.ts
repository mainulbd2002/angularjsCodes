import { Component } from '@angular/core';

@Component({
	selector: 'my-tutorial',
	template: `<h2>Example tutorials</h2>
				<h4>{{title}}</h4>
				<img [src] ="imgLink">
				<div [class.myClass] = "applyClass">Apply class</div>
				<div [style.color] = "applyBlue ? 'blue': 'orange'">Apply color</div>`,
	styles: [`.myClass {
		color: red;
	}`]
		
})

export class TutorialComponent{ 
	public title = "Example header from Mainuls tutorial component";
	public imgLink = "http://lorempixel.com/400/200";
	public applyClass = false;
	public applyBlue = true;
}

