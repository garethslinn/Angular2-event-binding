import {Component} from 'angular2/core';
import {myDataBinding} from './myDataBinding.component';


@Component({
    selector: 'my-app',
    template: `
        <input type="text" [(ngModel)]="name" />
        <my-data-binding [myName]="name" [myAge]="age" (interestsChanged)="interests = $event"></my-data-binding>
                <h4>My interests: {{interests}}</h4>


        
    `,
    directives: [myDataBinding]
})
export class AppComponent {
    name = 'Gareth';
    age = 31;
    interests = '';
}
