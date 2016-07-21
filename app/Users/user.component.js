System.register(['angular2/core', 'angular2/router', 'angular2/common', '../common/users.service', '../common/userValidators', '../common/user'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, users_service_1, userValidators_1, user_1;
    var UserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (userValidators_1_1) {
                userValidators_1 = userValidators_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            UserComponent = (function () {
                function UserComponent(fb, _router, _routeParams, _usersService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._usersService = _usersService;
                    this.user = new user_1.User();
                    this.mode = 'Create';
                    this.message = null;
                    this.form = fb.group({
                        username: [''],
                        email: ['', userValidators_1.UserValidators.validEmail],
                        phone: [''],
                        address: fb.group({
                            street: [],
                            suite: [],
                            city: [],
                            zip: []
                        })
                    });
                }
                UserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var userid = this._routeParams.get('id');
                    if (userid) {
                        this._usersService
                            .getUser(userid)
                            .subscribe(function (editUser) {
                            _this.user = editUser;
                            _this.mode = 'Edit';
                        }, function (error) {
                            console.log(error);
                            if (error.status == 404) {
                                _this._router.navigate(['NotFound']);
                            }
                        });
                    }
                };
                UserComponent.prototype.routerCanDeactivate = function (next, prev) {
                    if (this.form.dirty && this.mode !== 'done') {
                        return confirm("You have unsaved changes. Do you want to leave this page?");
                    }
                };
                UserComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.message = "Saving user, Please wait ...";
                    //this.form.markAsPristine();
                    this._usersService
                        .updateUser(this.user)
                        .subscribe(function (newUser) {
                        console.log(newUser);
                    }, function (error) {
                        console.log(error);
                        _this.message = error.message;
                    }, function () {
                        _this.message = "User saved successfully. Redirecting...";
                        _this.mode = 'done';
                        _this._router.navigate(['UsersList']);
                    });
                };
                UserComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/users/user.template.html',
                        providers: [users_service_1.UsersService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, router_1.RouteParams, users_service_1.UsersService])
                ], UserComponent);
                return UserComponent;
            }());
            exports_1("UserComponent", UserComponent);
        }
    }
});
//# sourceMappingURL=user.component.js.map