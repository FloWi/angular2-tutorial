import {Component} from 'angular2/core';
import {InputComponent} from "./bindings/input.component";
import {ConfirmComponent} from "./bindings/confirm.component";

@Component({
    selector: 'app',
    template: `
        <div class="container">
            <flwi-input
            (submitted)="onSubmit($event)"
            [myself]="myself"></flwi-input>
        </div>

        <div class="container">
            <flwi-confirm
            (confirmed)="onConfirm($event)"
            [myself]="myself"
            ></flwi-confirm>
        </div>

    `,
    directives: [InputComponent, ConfirmComponent]
})
export class AppComponent {

    myself = {name: '', age: ''};
    //confirmedMyself = {name: '', age: ''};

    onSubmit(submittedObj: {name: string, age: string}) {

        //create a copy here, because the two-way-databinding would otherwise update my object.
        console.log ("submitted", JSON.stringify(submittedObj));
        this.myself = {name: submittedObj.name, age: submittedObj.age};
    }

    onConfirm(confirmedObj: {name: string, age: string}) {

        //create a copy here, because the two-way-databinding would otherwise update my object.
        console.log ("confirmed", JSON.stringify(confirmedObj));
        this.myself = {name: confirmedObj.name, age: confirmedObj.age};
    }


}
