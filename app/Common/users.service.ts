import {Component, OnInit} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';
import {User} from './user';

@Injectable()

export class UsersService {
    private _url = "http://jsonplaceholder.typicode.com/users/";

    constructor(private _http: Http) {

    }

    getUsers() {
        //Return list of users
        return this._http
	                    .get(this._url)
                        .map(res => res.json());
    }

    getUser(id) {
        //Return user object with the given id
        return this._http
	                    .get(this._url + id )
                        .map(res => res.json());
    }

    createUser(user: User) {
        // Create a new user
        return this._http
                        .post(this._url,JSON.stringify(user))
                        .map(res => res.json());
    }

    updateUser(user: User) {
        
        // Create a new user
        if (!user.id) return this.createUser(user);

        //Update user      
        return this._http
                        .put(this._url + user.id,JSON.stringify(user))
                        .map(res => res.json());
    }

    removeUser(user: User) {
        // Remove a user
        return this._http
                        .delete(this._url + user.id)
                        .map(res => res.json());
    }

}
