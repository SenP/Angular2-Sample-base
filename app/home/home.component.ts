import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    template: `
                <h1> Welcome! </h1>
            `,
    directives: [ROUTER_DIRECTIVES]      
})

export class HomeComponent{
    
    constructor() {
    }
    
}