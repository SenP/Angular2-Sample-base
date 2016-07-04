// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {HTTP_PROVIDERS} from 'angular2/http';

import {NavbarComponent} from './navbar/navbar.component';

@Component({
    selector: 'my-app',
    template:   `
                   <nav-bar></nav-bar>
                `,
    styles: [`
                .avatar	{
                    width:	100;
                    height:	100;
                    border-radius:	100%;
                }	
         `],
    providers: [HTTP_PROVIDERS],
    directives: [NavbarComponent]
})

export class AppComponent {

    constructor() {
        
    }
  
       
}