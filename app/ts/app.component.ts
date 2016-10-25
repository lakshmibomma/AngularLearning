import {Component} from 'angular2/core';
@Component({
    selector: 'my-app',
    template: `
    <div><h1>{{pageTitle}}</h1>
        <pm-products></pm-products>
    </div>
    `
})

export class AppComponent {
    pageTitle:string = "RIIS Management LLC";
}