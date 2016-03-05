import {Component} from "angular2/core"

@Component({
    selector: "my-component",
    template: `
        Hi, I'm <span [style.color]="inputElement.value === 'yes' ? 'orange' : ''">{{name}}</span> is my very first Angular 2 component!
        <span [class.is-awesome]="inputElement.value === 'yes'">It's so awesome!!</span>
        <br/> <br/>

        Is it awesome? Enter 'yes' to show it's awesome
        <br/> <br/>

        <input type="text" #inputElement (keyup)="0">
        <br/> <br/>

        <button [disabled]="inputElement.value !== 'yes'">Only enabled, if 'yes' has been entered</button>



        <!--#inputElement creates a local variable &ndash;&gt; hash-tag + variableName-->
    `,
    styleUrls: ["src/css/mycomponent.css"]
})
export class MyComponentComponent {
    name = "Florian"
}