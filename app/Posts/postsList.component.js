System.register(['angular2/core', 'angular2/router', '../common/posts.service', '../common/post', '../common/users.service', './comment.component', '../common/spinner.component', '../common/filterByVal.pipe', '../common/pagination.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, posts_service_1, post_1, users_service_1, comment_component_1, spinner_component_1, filterByVal_pipe_1, pagination_component_1;
    var PostsListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (post_1_1) {
                post_1 = post_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (comment_component_1_1) {
                comment_component_1 = comment_component_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            },
            function (filterByVal_pipe_1_1) {
                filterByVal_pipe_1 = filterByVal_pipe_1_1;
            },
            function (pagination_component_1_1) {
                pagination_component_1 = pagination_component_1_1;
            }],
        execute: function() {
            PostsListComponent = (function () {
                function PostsListComponent(_postsService, _usersService) {
                    this._postsService = _postsService;
                    this._usersService = _usersService;
                    //paging values
                    this.pageSize = 8;
                    this.currentPagePosts = [];
                    this.isLoading = true;
                    this.isLoadingComments = false;
                    this.activePost = new post_1.Post();
                    this.activeUserId = null;
                }
                PostsListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._postsService
                        .getUsersAndPosts()
                        .subscribe(function (response) {
                        _this.postsList = response.posts;
                        _this.usersList = response.users;
                    }, null, function () { return _this.isLoading = false; });
                };
                PostsListComponent.prototype.selectPost = function (post) {
                    var _this = this;
                    if (!post)
                        return;
                    this.activePost = this.postsList[this.postsList.indexOf(post)];
                    if (this.activePost.comments)
                        return;
                    //load comments for the active post
                    this.isLoadingComments = true;
                    this._postsService
                        .getComments(post)
                        .subscribe(function (commentsList) {
                        _this.activePost.comments = commentsList;
                    }, null, function () { return _this.isLoadingComments = false; });
                };
                PostsListComponent.prototype.changeUser = function (byuser) {
                    this.activePost = new post_1.Post();
                    this.activeUserId = parseInt(byuser);
                };
                PostsListComponent.prototype.changePage = function (event) {
                    this.activePost = new post_1.Post();
                    this.currentPagePosts = event.currentPageItems;
                };
                PostsListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/posts/postsList.template.html',
                        styles: ["  \n                .posts\tli {\t\n                    cursor:\tdefault;\t\n                }\n                \n                .posts\tli:hover {\n                    background:\t#ecf0f1;\t\n                }\t\n\n                .list-group-item.active,\t\n                .list-group-item.active:hover,\t\n                .list-group-item.active:focus {\t\n                    background-color:\t#ecf0f1;\n                    border-color:\t#ecf0f1;\t\n                    color:\t#2c3e50;\n                }\n\n                select {\n                    margin-bottom: 10px;\n                    background: lightblue;\n                }\n           "],
                        directives: [router_1.ROUTER_DIRECTIVES, spinner_component_1.SpinnerComponent, comment_component_1.CommentComponent, pagination_component_1.PaginationComponent],
                        providers: [posts_service_1.PostsService, users_service_1.UsersService],
                        pipes: [filterByVal_pipe_1.FilterByValPipe]
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService, users_service_1.UsersService])
                ], PostsListComponent);
                return PostsListComponent;
            }());
            exports_1("PostsListComponent", PostsListComponent);
        }
    }
});
//# sourceMappingURL=postsList.component.js.map