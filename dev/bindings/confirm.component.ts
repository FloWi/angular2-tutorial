import {Component, EventEmitter, Input} from 'angular2/core'

@Component({
    selector: 'flwi-confirm',
    template: `
        <h1>You submitted the following details. Is this correct? </h1>
        <p>Your name is <span class="highlight">{{_passedInMyself.name}}</span> and you're <span class="highlight">{{_passedInMyself.age}}</span> years old.</p>
        <p>Please click on 'Confirm' if you have made any changes to this information.</p>

        <div>
            <label for="name">Your Name</label>
            <input type="text" id="name" [(ngModel)]="_myself.name" (keyup)="onKeyup()">
        </div>
        <div>
            <label for="age">Your Age</label>
            <input type="text" id="age" [(ngModel)]="_myself.age" (keyup)="onKeyup()">
        </div>
        <br>
        <div>Filled out: {{isFilled ? 'Yes' : 'No'}}</div>
        <div>Valid: {{isValid? 'Yes' : 'No'}}</div>
        <div>Has changed: {{hasChanged? 'Yes' : 'No'}}</div>
        <br>
        <button [disabled]="!isValid || !hasChanged" (click)="onConfirm()">Submit</button>

    `,
    //inputs: ['passedInMyself:myself'],
    outputs: ['confirmed']
})
export class ConfirmComponent {

    _passedInMyself = {name: '', age: ''};
    _myself = {name: '', age: ''};

    @Input()
    set myself(value: {name: string, age: string}) {
        this._passedInMyself = {name: value.name, age: value.age};
        this._myself = {name: value.name, age: value.age};
        this.validate();
    }

    isFilled = false;
    isValid = false;
    hasChanged = false;
    confirmed = new EventEmitter<{name: string, age: string}>();

    onKeyup() {
        this.validate();
    }

    validate() {
        this.isFilled = this._myself.name != '' && this._myself.age != '';
        this.isValid = this._myself.name != '' && /^\d+$/.test(this._myself.age);
        this.hasChanged = this._myself.name !== this._passedInMyself.name || this._myself.age !== this._passedInMyself.age;
    }

    onConfirm() {
        this.confirmed.emit(this._myself);
    }

}
