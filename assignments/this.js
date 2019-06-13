// Principle 1

// code example for Window Binding
var sayAge = function () {
    console.log(this.age)
};

var me = {
    age: 18
};

window.age = 18;
sayAge();

// Principle 2

// code example for Implicit Binding
var me = {
    name: 'Isaiah',
    age: 18,
    sayName: function () {
        console.log(this.name)
    }
}
me.sayName();

// Principle 3

// code example for New Binding
var Player = function (color, name, shape) {
    this.color = color;
    this.name = name;
    this.shape = shape;
};

var square = new Player('orange', 'Isaiah', 'square');
console.log(square)

// Principle 4

// code example for Explicit Binding
var sayName = function (lang1, lang2, lang3) {
    console.log(`My name is ${this.name} and I know ${lang1}, ${lang2}, and ${lang3}!`);
};

var me = {
    name: 'Isaiah',
    age: 18,
};

var languages = ['HTML', 'CSS', 'Javascript'];

sayName.apply(me, languages);
