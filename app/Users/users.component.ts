import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {UsersListComponent} from './usersList.component';
import {UserComponent} from './user.component';
import {CommonComponent} from '../common/common.component';

@RouteConfig([
    { path: '/', name: 'UsersList', component: UsersListComponent, useAsDefault: true },
    { path: '/new', name: 'UsersCreate', component: UserComponent },
    { path: '/notfound', name: 'NotFound', component: CommonComponent },
    { path: '/:id', name: 'UsersEdit', component: UserComponent }
    { path: '/:id/delete', name: 'UsersRemove', component: UserComponent }
])

@Component({
    template: `
                <div class="container">
                   <router-outlet></router-outlet>
                </div>
            `,
    directives: [ROUTER_DIRECTIVES]
})

export class UsersComponent {


}