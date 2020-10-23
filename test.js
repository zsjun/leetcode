function foo() {
  setTimeout(function () {
    console.log(this);
    console.log("id:", this.id);
  }, 100);
}
var id = 21;
foo.call({ id: 22 });
console.log(this);
// console.log(22111, this);
// console.log(global);

var b = 10;
(function b1() {
  console.log(b);
  b = 20;
  console.log(b);
})();
