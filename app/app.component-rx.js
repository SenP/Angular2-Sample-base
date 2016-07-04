/// <reference path="../typings/tsd.d.ts" />
System.register(['angular2/core', 'angular2/common', 'rxjs/Rx', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, common_1, Rx_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(fb) {
                    this.form = fb.group({
                        search: []
                    });
                    var search = this.form.find('search');
                    // search.valueChanges
                    //     .debounceTime(400)
                    //     .map(str => (<string>str).replace(' ', '-'))
                    //     .subscribe(x => console.log(x));
                    // var startDates = [];
                    // var startDate = new Date();
                    // for(var day=-2; day <=2; day++){
                    //     var date = new Date( startDate.getFullYear(), startDate.getMonth(),startDate.getDate() + day);
                    //     startDates.push(date);
                    // }
                    // Observable.fromArray(startDates)
                    //             .map(date => {console.log('getting deals for :' + date); return [1,2,3];})
                    //             .subscribe(x => console.log(x));
                    // var ob = Observable.interval(5000);
                    // ob.flatMap(x => { 
                    //             console.log('getting the latest news...'); 
                    //             return Observable.from([12,13,14]); 
                    //         })
                    //     .subscribe(news => console.log('news received:' + news));
                    // var userStream = Observable.of({
                    //     userid: 1, username: 'senk'
                    // }).delay(2000);
                    // var tweetStream = Observable.of([1,2,3]).delay(1500);
                    // Observable
                    //         .forkJoin(userStream, tweetStream)
                    //         .map(joined => {
                    //             return new Object({user: joined[0], tweets: joined[1]})
                    //         })
                    //         .subscribe(x => console.log(x));
                    // var counter = 0;
                    // var ajaxcall = Observable.of('url')
                    //                         .flatMap(() => {
                    //                             if(++counter < 3)
                    //                                     return Observable.throw(new Error('Ajax request failed!'));
                    //                             return Observable.of([1,2,3]);
                    //                         });
                    // ajaxcall
                    //     .retry(1)
                    //     .catch(err => { return Observable.of([1,1,1]) })
                    //     .subscribe(
                    //             x => console.log(x), 
                    //             err => console.error(err)
                    //     );
                    // var remoteStream = Observable.of([4,5,6]);
                    // remoteStream
                    //     .catch(err => { return Observable.of([1, 2, 3]) })
                    //     .subscribe(x => console.log(x));
                    // var remoteStream = Observable.of([4,5,6]).delay(5000);
                    // remoteStream
                    //     .timeout(2000)
                    //     .subscribe(
                    //         x => console.log(x),
                    //         err => console.error(err)
                    //     );
                    var ob1 = Rx_1.Observable.of([4, 5, 6]);
                    var ob2 = Rx_1.Observable.throw(new Error('Ajax request failed!'));
                    ob2.subscribe(function (x) { return console.log(x); }, function (err) { return console.error(err); }, function () { return console.log('completed'); });
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <form [ngFormModel]=\"form\">\n\t\t\t    <input  type=\"text\"\tngControl=\"search\" class=\"form-control\" >\n        </form>\n    "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component-rx.js.map