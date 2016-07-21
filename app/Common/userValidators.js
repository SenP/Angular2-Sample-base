System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UserValidators;
    return {
        setters:[],
        execute: function() {
            UserValidators = (function () {
                function UserValidators() {
                }
                UserValidators.validEmail = function (control) {
                    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (!re.test(control.value))
                        return { validEmail: true };
                    return null;
                };
                return UserValidators;
            }());
            exports_1("UserValidators", UserValidators);
        }
    }
});
//# sourceMappingURL=userValidators.js.map