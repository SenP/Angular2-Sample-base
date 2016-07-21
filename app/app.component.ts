// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {Router, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import {NavbarComponent} from './navbar/navbar.component';
import {UsersComponent} from './users/users.component';
import {PostsComponent} from './posts/posts.component';
import {HomeComponent} from './home/home.component';


@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/users/...', name: 'Users', component: UsersComponent},
    { path: '/posts/...', name: 'Posts', component: PostsComponent },
    { path: '/*other', name: 'Other', redirectTo: ['Home'] }
])

@Component({
    selector: 'my-app',
    template:   `
                   <nav-bar></nav-bar>
                   <div class="container">
                        <router-outlet></router-outlet>
                    </div>
                `,
    directives: [NavbarComponent, ROUTER_DIRECTIVES]
})

export class AppComponent {

    constructor() {
        
    }
  
       
}