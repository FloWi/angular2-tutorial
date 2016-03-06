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
    `,
})
export class AppComponent {
    name = 'Florian';

    testFn() {
        return 1 === 1;
    }
}
