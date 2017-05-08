import { Component } from '@angular/core';

@Component({
	selector: 'my-tutorial',
	template: `<h2>Example tutorials</h2>
				<h4>{{title}}</h4>
				<img [src] ="imgLink">`
		
})

export class TutorialComponent{ 
	public title = "Example header from Mainuls tutorial component";
	public imgLink = "http://lorempixel.com/400/200";
}

