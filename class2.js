// class Parent {
//     constructor() {
//         this.fatherName = 'Schwerznegger'
//     }
// }
// class Child extends Parent {
//     constructor(name) {
//         super();
//         this.name = name;
//     }
// }
// const baby = new Child('Nahid');
// const baby2 = new Child('Hassan');
// console.log(baby);
// console.log(baby2);

// class Parent {
//     constructor() {
//         this.fatherFather = 'Koddus';
//     }
// };
// class Child extends Parent {
//     constructor(name) {
//         super();
//         this.name = name;
//     }
// };

// class Parent {
//     constructor() {
//         this.fatherFather = 'Koddus';
//     }
// };
// class Child extends Parent {
//     constructor(name) {
//         super();
//         this.name = name;
//     }
// };
// const baby = new Child('Abul');
// console.log(baby);

class Parent {
    constructor() {
        this.fatherName = 'Abul Hassan '
    }
}
class Child extends Parent {
    constructor(name) {
        super()
        this.name = name;
    }
    getName() {
        return this.fatherName + ' ' + this.name;
    }
}
const baby = new Child('Patal');
console.log(baby.getName());