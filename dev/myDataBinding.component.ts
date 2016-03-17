import {Component, EventEmitter} from 'angular2/core';

@Component({
    selector: 'my-data-binding',
    template: `
        <h2>{{name}} or are {{age}} years old</h2>
    
        <input type="text" (keyup)="onInterestsChanged(interests.value)" #interests />
    `,
    inputs: ['name: myName', 'age: myAge'],
    outputs: ['interestsChanged']
})
export class myDataBinding {
    name = 'Slinn';
    age = 23;
    interestsChanged  = new EventEmitter<string>();

    onInterestsChanged( interests: string ) {
        this.interestsChanged.emit(interests);
    }

}
