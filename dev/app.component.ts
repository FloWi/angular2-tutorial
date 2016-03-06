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

    `,
})
export class AppComponent {
    name = 'Florian';

    testFn() {
        return 1 === 1;
    }
}
