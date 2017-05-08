import { Component } from '@angular/core';

@Component({
	selector: 'my-tutorial',
	template: `<h2>Example tutorials</h2>
				<h4>{{title}}</h4>
				<img [src] ="imgLink">
				<div [class.myClass] = "applyClass">Apply class</div>
				<div [style.color] = "applyBlue ? 'blue': 'orange'">Apply color</div>
				<button (click) = "onClick(demoInput.value)">Click Me</button>
				<input type="text" #demoInput><br>
				<input type="text" [(ngModel)] = "fName">
				<input type="text" [(ngModel)] = "lName">
				Full Name : {{fName}} {{lName}}
				<p *ngIf = "showElement">Showing Element</p><br>
				<input type="text" [(ngModel)] = "color">
				<div [ngSwitch] = "color">
					<p *ngSwitchWhen="'red'">Red is selected</p>
					<p *ngSwitchWhen="'blue'">Blue is selected</p>
					<p *ngSwitchWhen="'green'">Green is selected</p>
					<p *ngSwitchWhen="'yellow'">Yellow is selected</p>
					<p *ngSwitchDefault>Select Valid color</p>
				</div>
				<ul>
					<li *ngFor="let c of colorlist">{{c}}</li>
				</ul>`,
	styles: [`.myClass {
		color: red;
	}`]
		
})

export class TutorialComponent{ 
	public title = "Example header from Mainuls tutorial component";
	public imgLink = "http://lorempixel.com/400/200";
	public applyClass = false;
	public applyBlue = true;
	public onClick(value){
		
		if (value != null && value !== undefined)
			console.log("Button Clicked .. "+value);
		else
			console.log("Button clicked");

	}
	public fName;
	public lName;
	public showElement = true;
	public color;
	public colorlist = ['red','green','blue'];
}

