var SimpleCounter = /** @class */ (function () {
    function SimpleCounter() {
    }
    SimpleCounter.prototype.count = function () {
        var count = 5;
        for (var i = 1; i <= 7; i++) {
            document.write(i.toString() + '<br>');
        }
        console.log('HECHO');
    };
    return SimpleCounter;
}());
var count = new SimpleCounter();
count.count();
var getSum = function (n1, n2) {
    return n1 + n2;
};
document.write(getSum(5, 6).toString());
console.log(getSum(2, 3));
