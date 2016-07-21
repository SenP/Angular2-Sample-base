System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var PaginationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PaginationComponent = (function () {
                function PaginationComponent() {
                    this.items = [];
                    this.pageSize = 10;
                    this.pageChanged = new core_1.EventEmitter();
                }
                PaginationComponent.prototype.ngOnInit = function () {
                    //Calculate total pages required and set current page to 1
                    this.renderInit();
                };
                PaginationComponent.prototype.ngOnChanges = function (changes) {
                    this.items = changes.items.currentValue;
                    this.renderInit();
                };
                PaginationComponent.prototype.onClick = function (page) {
                    if (page == this.currentPage || page < 1 || page > this.totalPages)
                        return;
                    this.currentPage = page;
                    this.pageStart = (this.currentPage - 1) * this.pageSize;
                    this.pageEnd = Math.min(this.pageStart + this.pageSize, this.items.length) - 1;
                    this.emitPageChanged(page);
                };
                PaginationComponent.prototype.renderInit = function () {
                    if (this.items.length <= this.pageSize) {
                        this.totalPages = 1;
                        this.currentPage = 1;
                        this.pages = [1];
                    }
                    else {
                        this.totalPages = Math.ceil(this.items.length / this.pageSize);
                        this.pages = _.range(1, this.totalPages + 1);
                        this.currentPage = 1;
                    }
                    this.pageStart = (this.currentPage - 1) * this.pageSize;
                    this.pageEnd = Math.min(this.pageStart + this.pageSize, this.items.length) - 1;
                    this.emitPageChanged(1);
                };
                PaginationComponent.prototype.emitPageChanged = function (page) {
                    var pageItems = this.getPageItems(this.items, this.pageStart, this.pageEnd);
                    this.pageChanged.emit({
                        currentPage: page,
                        currentPageItems: pageItems
                    });
                };
                PaginationComponent.prototype.getPageItems = function (list, start, end) {
                    if (list.length == 0)
                        return [];
                    if (!start)
                        start = 0;
                    if (!end || end > list.length)
                        end = list.length - 1;
                    return list.slice(start, end + 1);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PaginationComponent.prototype, "items", void 0);
                __decorate([
                    core_1.Input('page-size'), 
                    __metadata('design:type', Object)
                ], PaginationComponent.prototype, "pageSize", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], PaginationComponent.prototype, "pageChanged", void 0);
                PaginationComponent = __decorate([
                    core_1.Component({
                        selector: 'pagination',
                        template: "\n            <div *ngIf=\"totalPages > 1\">\n                <nav>\n                    <ul class=\"pagination\">\n                        <li [class.disabled]=\"currentPage == 1\" (click)=\"onClick(currentPage - 1);\"><span>&laquo;</span></li>\n                        <li *ngFor=\"#page of pages\" class=\"page\" \n                            [class.active]=\"page == currentPage\" \n                            (click)=\"onClick(page)\"> \n                            <span> {{ page }} </span>\n                        </li>\n                        <li [class.disabled]=\"currentPage == totalPages\" (click)=\"onClick(currentPage + 1);\"><span>&raquo;</span></li>\n                    </ul>\n                </nav>\n            </div>\n            ",
                        styles: ["\n               .pagination li:hover {\n                   cursor: pointer;\n               }            \n            "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PaginationComponent);
                return PaginationComponent;
            }());
            exports_1("PaginationComponent", PaginationComponent);
        }
    }
});
//# sourceMappingURL=pagination.component.js.map