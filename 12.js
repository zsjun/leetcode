class Dog {
  print() {
    console.log("dog");
  }
}
class Cat extends Dog {
  constructor() {
    super();
  }
  print() {
    super.print();
    console.log("cat");
  }
}
class Mouse {
  constructor(instance) {
    Mouse.prototype.__proto__ = instance.__proto__;
  }
  print() {
    super.print();
    console.log("mouse");
  }
}

const a1 = new Cat();
const b1 = new Mouse(a1);
b1.print();
