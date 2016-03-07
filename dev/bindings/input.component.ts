import {Component} from 'angular2/core';
import {EventEmitter} from "angular2/core";

@Component({
    selector: 'flwi-input',
    template: `
        <h1>Your details, please</h1>

        <div>
            <label for="name">Your Name</label>
            <input type="text" id="name" [(ngModel)]="myself.name" (keyup)="onKeyup()">
        </div>
        <div>
            <label for="age">Your Age</label>
            <input type="text" id="age" [(ngModel)]="myself.age" (keyup)="onKeyup()">
        </div>
        <br>
        <div>Filled out: {{isFilled ? 'Yes' : 'No'}}</div>
        <div>Valid: {{isValid? 'Yes' : 'No'}}</div>
        <br>
        <button [disabled]="!isValid" (click)="onSubmit()">Submit</button>
    `,
    outputs: ['submitted']
})
export class InputComponent {
    myself = {name: '', age: ''};

    isFilled = false;
    isValid = false;

    submitted = new EventEmitter<{name: string, age: string}>();

    onKeyup() {
        this.isFilled = this.myself.name != '' && this.myself.age != '';
        this.isValid = this.myself.name != '' && /^\d+$/.test(this.myself.age);
    }

    onSubmit() {
        this.submitted.emit(this.myself);
    }
}