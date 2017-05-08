"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TutorialComponent = (function () {
    function TutorialComponent() {
        this.title = "Example header from Mainuls tutorial component";
        this.imgLink = "http://lorempixel.com/400/200";
        this.applyClass = false;
        this.applyBlue = true;
        this.showElement = true;
        this.colorlist = ['red', 'green', 'blue'];
    }
    TutorialComponent.prototype.onClick = function (value) {
        if (value != null && value !== undefined)
            console.log("Button Clicked .. " + value);
        else
            console.log("Button clicked");
    };
    TutorialComponent = __decorate([
        core_1.Component({
            selector: 'my-tutorial',
            template: "<h2>Example tutorials</h2>\n\t\t\t\t<h4>{{title}}</h4>\n\t\t\t\t<img [src] =\"imgLink\">\n\t\t\t\t<div [class.myClass] = \"applyClass\">Apply class</div>\n\t\t\t\t<div [style.color] = \"applyBlue ? 'blue': 'orange'\">Apply color</div>\n\t\t\t\t<button (click) = \"onClick(demoInput.value)\">Click Me</button>\n\t\t\t\t<input type=\"text\" #demoInput><br>\n\t\t\t\t<input type=\"text\" [(ngModel)] = \"fName\">\n\t\t\t\t<input type=\"text\" [(ngModel)] = \"lName\">\n\t\t\t\tFull Name : {{fName}} {{lName}}\n\t\t\t\t<p *ngIf = \"showElement\">Showing Element</p><br>\n\t\t\t\t<input type=\"text\" [(ngModel)] = \"color\">\n\t\t\t\t<div [ngSwitch] = \"color\">\n\t\t\t\t\t<p *ngSwitchWhen=\"'red'\">Red is selected</p>\n\t\t\t\t\t<p *ngSwitchWhen=\"'blue'\">Blue is selected</p>\n\t\t\t\t\t<p *ngSwitchWhen=\"'green'\">Green is selected</p>\n\t\t\t\t\t<p *ngSwitchWhen=\"'yellow'\">Yellow is selected</p>\n\t\t\t\t\t<p *ngSwitchDefault>Select Valid color</p>\n\t\t\t\t</div>\n\t\t\t\t<ul>\n\t\t\t\t\t<li *ngFor=\"let c of colorlist\">{{c}}</li>\n\t\t\t\t</ul>",
            styles: [".myClass {\n\t\tcolor: red;\n\t}"]
        }), 
        __metadata('design:paramtypes', [])
    ], TutorialComponent);
    return TutorialComponent;
}());
exports.TutorialComponent = TutorialComponent;
//# sourceMappingURL=tutorial.component.js.map