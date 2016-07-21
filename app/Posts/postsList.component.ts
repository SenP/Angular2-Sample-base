import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {PostsService} from '../common/posts.service';
import {Post} from '../common/post';
import {User} from '../common/user';
import {UsersService} from '../common/users.service';
import {CommentComponent} from './comment.component';

import {SpinnerComponent} from '../common/spinner.component';
import {FilterByValPipe} from '../common/filterByVal.pipe';
import {PaginationComponent} from '../common/pagination.component';

@Component({
    templateUrl: 'app/posts/postsList.template.html',
    styles: [`  
                .posts	li {	
                    cursor:	default;	
                }
                
                .posts	li:hover {
                    background:	#ecf0f1;	
                }	

                .list-group-item.active,	
                .list-group-item.active:hover,	
                .list-group-item.active:focus {	
                    background-color:	#ecf0f1;
                    border-color:	#ecf0f1;	
                    color:	#2c3e50;
                }

                select {
                    margin-bottom: 10px;
                    background: lightblue;
                }
           `],
    directives: [ROUTER_DIRECTIVES, SpinnerComponent, CommentComponent, PaginationComponent],
    providers: [PostsService, UsersService],
    pipes: [FilterByValPipe]
})

export class PostsListComponent implements OnInit {

    //base model
    postsList: [Post];
    usersList: [User];
    activePost: Post;
    activeUserId;

    //loading flags
    isLoading: boolean;
    isLoadingComments: boolean;

    //paging values
    pageSize = 8;
    currentPagePosts = [];

    constructor(private _postsService: PostsService,
        private _usersService: UsersService) {
        this.isLoading = true;
        this.isLoadingComments = false;
        this.activePost = new Post();
        this.activeUserId = null;
    }

    ngOnInit() {
        this._postsService
            .getUsersAndPosts()
            .subscribe(response => {
                this.postsList = response.posts;
                this.usersList = response.users;
            },
            null,
            () => this.isLoading = false
            );
    }

    selectPost(post) {
        if (!post) return;

        this.activePost = this.postsList[this.postsList.indexOf(post)];

        if (this.activePost.comments) //comments loaded already, return
            return;

        //load comments for the active post
        this.isLoadingComments = true;

        this._postsService
            .getComments(post)
            .subscribe(commentsList => {
                this.activePost.comments = commentsList;
            },
            null,
            () => this.isLoadingComments = false
            );

    }

    changeUser(byuser) {
        this.activePost = new Post();
        this.activeUserId = parseInt(byuser);
    }

    changePage(event) {
        this.activePost = new Post();
        this.currentPagePosts = event.currentPageItems;
    }

}