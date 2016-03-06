import {Component} from 'angular2/core'

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
            solved: switch1.value == switch1Expected &&
                    switch2.value == switch2Expected &&
                    switch3.value == switch3Expected &&
                    switch4.value == switch4Expected
        }"
        [ngStyle]="{display: name.value === '' ? 'none' : 'block'}"
        >
            <h2>The Puzzle</h2>
            <p>Ok, welcome <span class="name">{{name.value}}</span></p>
            <br>
            Swtitch 1:
            <input type="text" #switch1><br>
            Swtitch 2:
            <input type="text" #switch2><br>
            Swtitch 3:
            <input type="text" #switch3><br>
            Swtitch 4:
            <input type="text" #switch4><br>
        </section>
        <h2>Congratulations {{name.value}}, you did it!</h2>
    `
})
export class PuzzleComponent {
    switch1Expected: number;
    switch2Expected: number;
    switch3Expected: number;
    switch4Expected: number;
}