/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window Binding -

* 2. Implicit Binding - When you call a function or when it is invoked, to the left of the dot is what what 'this' is referencing.

* 3. new Binding -

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

// Principle 4
// code example for Explicit Binding
var sayName = function() {
    console.log(`My name is ${this.name}`);
};

var me = {
    name: 'Isaiah',
    age: 18,
};

sayName.call(me);