/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window Binding -

* 2. Implicit Binding - When you call a function or when it is invoked, to the left of the dot is what what 'this' is referencing.

* 3. new Binding - When function is invoked with new keyword the this keyword inside function is bound to constructed item.

* 4. Explicit Binding - When you call a funtion you explicitly state what the this keyword is going to reference.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

// Principle 2
// code example for Implicit Binding

var me = {
    name: 'Isaiah',
    age: 18,
    sayName: function() {
        console.log(this.name)
    }
}
me.sayName();

// Principle 3
// code example for New Binding
var Player = function(color, name, shape) {
    this.color = color;
    this.name = name;
    this.shape = shape;
};

var square = new Player('orange', 'Isaiah', 'square');
console.log(square)

// Principle 4
// code example for Explicit Binding
var sayName = function(lang1, lang2, lang3) {
    console.log(`My name is ${this.name} and I know ${lang1}, ${lang2}, and ${lang3}!`);
};

var me = {
    name: 'Isaiah',
    age: 18,
};

var languages = ['HTML', 'CSS', 'Javascript'];

sayName.apply(me, languages);