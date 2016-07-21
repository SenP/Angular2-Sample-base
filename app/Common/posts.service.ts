import {Component, OnInit} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';
import {Post} from './post';

@Injectable()

export class PostsService {
    private _url = "http://jsonplaceholder.typicode.com/posts/";
    private _url_user = "http://jsonplaceholder.typicode.com/users/";

    constructor(private _http: Http) {

    }

    getUsersAndPosts() {

        //posts observable
        var posts = this._http
            .get(this._url)
            .map(res => res.json());

        //users observable
        var users = this._http
            .get(this._url_user)
            .map(res => res.json());

        return Observable
            .forkJoin(posts, users)
            .map(result => return { posts: result[0], users: result[1] } );

    }

    getPost(id) {
        //Return post object with the given id
        return this._http
            .get(this._url + id)
            .map(res => res.json());
    }

    getComments(post) {
        //Return comments for the given post
        return this._http
            .get(this._url + post.id + '/comments')
            .map(res => res.json());
    }

    createPost(post: Post) {
        // Create a new post
        return this._http
            .post(this._url, JSON.stringify(post))
            .map(res => res.json());
    }

    updatePost(post: Post) {

        // Create a new post
        if (!post.id) return this.createPost(post);

        //Update post      
        return this._http
            .put(this._url + post.id, JSON.stringify(post))
            .map(res => res.json());
    }

    removePost(post: Post) {
        // Remove a post
        return this._http
            .delete(this._url + post.id)
            .map(res => res.json());
    }

}
