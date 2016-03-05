import {Component} from 'angular2/core';
import {MyComponentComponent} from "./my-component.component";

@Component({
    selector: 'my-app',
    directives: [MyComponentComponent], //very important - otherwise nothing happens ;-)
    template: `
        <h1>Angular 2 Boilerplate</h1>

        <h2>Now comes the 2nd component</h2>
        <my-component></my-component>
    `,
})
export class AppComponent {

}
