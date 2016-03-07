import {Component} from 'angular2/core';
import {InputComponent} from "./bindings/input.component";

@Component({
    selector: 'app',
    template: `
        <div class="container">
            <flwi-input (submitted)="onSubmit($event)"></flwi-input>
        </div>

        <div class="container">
            <h3>submitted value</h3>
            <pre>{{objString}}</pre>
        </div>

        <div class="container">
            ...
        </div>

    `,
    directives: [InputComponent]
})
export class AppComponent {

    myself = {name: '', age: ''};
    confirmedMyself = {name: '', age: ''};
    objString = '';

    onSubmit(obj) {
        this.objString = JSON.stringify(obj);
    }
}
