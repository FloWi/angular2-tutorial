import {Component} from 'angular2/core'
import {Input} from 'angular2/core';


@Component({
    selector: 'flwi-property-binding',
    template: `
        <h2>This is the child component</h2>
        <p>hey, my name is {{name}} and I'm {{age}} years old</p>
        <p>Ok, you got me - I'm really {{realAge}} years old.</p>
    `,
    inputs: ['name:myName', 'age:myAge']
})
export class PropertyBindingComponent {

    name = '';
    age = 20;
    @Input('myRealAge') realAge = 21;
}