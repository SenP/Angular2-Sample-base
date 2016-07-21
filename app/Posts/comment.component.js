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
    var CommentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CommentComponent = (function () {
                function CommentComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], CommentComponent.prototype, "comment", void 0);
                CommentComponent = __decorate([
                    core_1.Component({
                        selector: 'post-comment',
                        template: "\n               <div class=\"comment\">\n                    <div class=\"media\">\n                        <div class=\"media-left media-middle\">\n                            <img class=\"media-object\" [src]=\"'http://lorempixel.com/80/80/people?random=' + comment.id\" />\n                        </div>\n                        <div class=\"media-body\">\n                            <h4 class=\"media-heading\">{{ comment.name }} </h4>\n                            <div class=\"comment-text\"> {{ comment.body}} </div>\n                        </div>\n                    </div>\n                </div>\n            ",
                        styles: ["\n                .comment {\n                    margin: 30px;               \n                }\n\n                img {\n                    width: 80px;\n                    height: 80px; \n                    border-radius: 100%;\n                }                 \n            "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CommentComponent);
                return CommentComponent;
            }());
            exports_1("CommentComponent", CommentComponent);
        }
    }
});
//# sourceMappingURL=comment.component.js.map