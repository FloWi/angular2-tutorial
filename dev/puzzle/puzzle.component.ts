import {Component} from 'angular2/core'
import {OnInit} from "angular2/core";

@Component({
    selector: 'flwi-puzzle',
    template: `
        <section class="setup">
            <h2>Game Setup</h2>
            Enter your name please:
            <input type="text" #name (keyup)="0"> <!--dummy-event for updating the ui-->
        </section>
        <!--[class.is-awesome]="true"-->
        <!--[ngClass]="{is-awesome: true}"-->
        <!--these lines are identical-->
        <section
        [ngClass]="{
            puzzle: true,
            solved: switch1.value == switch1Expected && switch2.value == switch2Expected && switch3.value == switch3Expected && switch4.value == switch4Expected
        }"
        [ngStyle]="{display: name.value === '' ? 'none' : 'block'}"
        >
            <h2>
            The Puzzle |
            {{switch1.value == switch1Expected && switch2.value == switch2Expected && switch3.value == switch3Expected && switch4.value == switch4Expected ? 'SOLVED' : 'NOT SOLVED'}}
            </h2>
            <p>Ok, welcome <span class="name">{{name.value}}</span></p>
            <br>
            Swtitch 1:
            <input type="number" #switch1 (keyup)="0" value="-1" max="1" min="-1"><br>
            Swtitch 2:
            <input type="number" #switch2 (keyup)="0" value="-1" max="1" min="-1"><br>
            Swtitch 3:
            <input type="number" #switch3 (keyup)="0" value="-1" max="1" min="-1"><br>
            Swtitch 4:
            <input type="number" #switch4 (keyup)="0" value="-1" max="1" min="-1"><br>
        </section>
        <h2 [hidden]="!(switch1.value == switch1Expected && switch2.value == switch2Expected && switch3.value == switch3Expected && switch4.value == switch4Expected)">Congratulations {{name.value}}, you did it!</h2>
    `
})
export class PuzzleComponent implements OnInit {
    switch1Expected: number;
    switch2Expected: number;
    switch3Expected: number;
    switch4Expected: number;


    ngOnInit():any {

        this.switch1Expected = Math.round(Math.random());
        this.switch2Expected = Math.round(Math.random());
        this.switch3Expected = Math.round(Math.random());
        this.switch4Expected = Math.round(Math.random());
        console.log(this.switch1Expected, this.switch2Expected, this.switch3Expected, this.switch4Expected);
    }
}