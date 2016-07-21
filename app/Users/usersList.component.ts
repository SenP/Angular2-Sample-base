import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {UsersService} from '../common/users.service';
import {SpinnerComponent} from '../common/spinner.component';

@Component({
    templateUrl: 'app/users/usersList.template.html',
    directives: [ROUTER_DIRECTIVES, SpinnerComponent ],
    providers: [UsersService]
})

export class UsersListComponent implements OnInit {
    usersList = [];
    isLoading = true;
    isDeleting = false;

    constructor(private _usersService: UsersService) {
    }

    ngOnInit() {
        this._usersService
            .getUsers()
            .subscribe(userslist => {
                this.usersList = userslist;
            },
            null,
            () => this.isLoading = false
            );
    }

    onRemove(user) {

        if (!confirm("Are you sure you want to delete this user?"))
            return;

        this.isDeleting = true;
        this._usersService
            .removeUser(user)
            .subscribe(response => {
                this.usersList.splice(this.usersList.indexOf(user), 1);
                this.isDeleting = false;                
            }
            );
    }

}