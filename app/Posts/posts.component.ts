import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {PostsListComponent} from './postsList.component';
import {PostComponent} from './user.component';
import {CommonComponent} from '../common/common.component';

@RouteConfig([
    { path: '/', name: 'PostsList', component: PostsListComponent, useAsDefault: true },
    { path: '/notfound', name: 'NotFound', component: CommonComponent },
])

@Component({
    template: `
                <div class="container">
                   <router-outlet></router-outlet>
                </div>
            `,
    directives: [ROUTER_DIRECTIVES]
})

export class PostsComponent {


}