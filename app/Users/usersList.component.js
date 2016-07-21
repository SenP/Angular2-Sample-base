System.register(['angular2/core', 'angular2/router', '../common/users.service', '../common/spinner.component'], function(exports_1, context_1) {
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
    var core_1, router_1, users_service_1, spinner_component_1;
    var UsersListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            }],
        execute: function() {
            UsersListComponent = (function () {
                function UsersListComponent(_usersService) {
                    this._usersService = _usersService;
                    this.usersList = [];
                    this.isLoading = true;
                    this.isDeleting = false;
                }
                UsersListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._usersService
                        .getUsers()
                        .subscribe(function (userslist) {
                        _this.usersList = userslist;
                    }, null, function () { return _this.isLoading = false; });
                };
                UsersListComponent.prototype.onRemove = function (user) {
                    var _this = this;
                    if (!confirm("Are you sure you want to delete this user?"))
                        return;
                    this.isDeleting = true;
                    this._usersService
                        .removeUser(user)
                        .subscribe(function (response) {
                        _this.usersList.splice(_this.usersList.indexOf(user), 1);
                        _this.isDeleting = false;
                    });
                };
                UsersListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/users/usersList.template.html',
                        directives: [router_1.ROUTER_DIRECTIVES, spinner_component_1.SpinnerComponent],
                        providers: [users_service_1.UsersService]
                    }), 
                    __metadata('design:paramtypes', [users_service_1.UsersService])
                ], UsersListComponent);
                return UsersListComponent;
            }());
            exports_1("UsersListComponent", UsersListComponent);
        }
    }
});
//# sourceMappingURL=usersList.component.js.map