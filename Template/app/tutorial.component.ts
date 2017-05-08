import { Component } from '@angular/core';

@Component({
	selector: 'my-tutorial',
	template: `<h2>Example tutorials</h2>
				<h4>Example header from tutorial component</h4>`
	styles: [`h4 {
		color: red;
	}`]	
})

export class TutorialComponent{ }

