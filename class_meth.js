var MyClass = /** @class */ (function () {
    function MyClass() {
        var _this = this;
        this.name = "This is my class how can I do";
        this.getName = function () {
            return _this.name;
        };
    }
    return MyClass;
}());
var c = new MyClass();
var g = c.getName;
// Prints "MyClass" instead of crashing
console.log(g());
