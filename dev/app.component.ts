import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    template: `
        <h1>Angular 2 Directives - String interpolation</h1>
        {{'Hey'}} <br>
        {{1 === 1}} <br>
        {{name}} <br>
        {{testFn()}} <br>
        <input type="text" value="{{name}}" class="{{'redClass'}}"> <br>

        <h1>Angular 2 Directives - Property binding</h1>
        bound to an angularjs introduced default property (as in 'value') or directive (as in ngClass) <br>
        directives of angularjs are prefixed with 'ng' <br>
        <input type="text" [value]="name" [ngClass]="{redClass: true}"> <br>

        <h1>Angular 2 Directives - Event binding</h1>
        <input type="text" (keyup)="onKeyup(inputElement.value)" #inputElement> <br>
        <p>{{values}}</p>

        <br><br>
        <h1>Angular 2 Directives - Two way databinding</h1>
        <input type="text" [(ngModel)]="twoWayBoundName">
        <p>Your two-way-data-bound-name: {{twoWayBoundName}}</p>
    `,
})
export class AppComponent {
    name = 'Florian';
    //twoWayBoundName: string; //works even without the property
    values = '';

    testFn() {
        return 1 === 1;
    }

    onKeyup(value: String) {
        this.values += value + ' | '
    }
}
