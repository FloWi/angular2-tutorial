import {Component} from 'angular2/core';
import {PropertyBindingComponent} from "./property-binding.component";

@Component({
    selector: 'app',
    template: `
        <section class="parent">
            <h2>This is the parent component</h2>
            <h4>Please enter your name</h4>
            <input type="text" [(ngModel)]="name">
            <br><br>
            <pre>{{name}}</pre>
            <p>The hobbies of the child-component are {{hobbies}}.</p>
            <br><br>
            <section class="child"
            [ngStyle]="{display: name == null || name === '' ? 'none' : 'block'}"
            >
                <flwi-property-binding
                [myName]="name"
                [myAge]="29"
                [myRealAge]="34"
                (hobbiesChanged)="hobbies = $event"
                ></flwi-property-binding>

            </section>

        </section>
    `,
    directives: [PropertyBindingComponent]
})
export class AppComponent {

    hobbies = '';

}
