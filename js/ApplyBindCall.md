**Question:** What is the difference between `apply()`, `bind()`, `call()` in javascript?

**Answer:** Apply, Bind, and Call are native javascript functions within the `Function.prototype`. They allow you to execute or create new functions by setting the `this` context to the object variable being passed in.

For example:

```javascript
var person1 = {name: "Felicia", age: 13, weight: 100};
var person2 = {name: "Deebo", age: 22, weight: 180};

var sayBye = function() {
  console.log("Bye, " + this.name);
}
```

You can call `sayBye()` but it will give you errors since "this" is never declared in the scope. For this example, `this` would resolve to the `window` object (`global` for node`). In order to use this function, we must use either a `.call()` or `.apply()` and pass in an object, which would look like:

```javascript
sayBye.call(person1); // "Bye, Felicia"
sayBye.apply(person2); // "Bye, Deebo"
```

The difference between the two calls can be seen if we have a function with multiple parameters:

```javascript
var sayGreeting = function(greeting, question) {
  console.log(greeting + " " + this.name + ". " + question);
}

sayGreeting.call(person1, "Whats up", "Hows it going?"); // "Whats up Felicia. Hows it going?
```

The new function `sayGreeting()` takes 2 parameters. We pass in these values into the `call()` function as a comma separated list. Every subsequent value that we pass to `call()` corresponds to the function's parameter, so "Whats up" corresponds to the `greeting` parameter and "Hows it going?" corresponds to the `question` parameter.

This way of passing in parameters through the `call()` function seems simple enough, but it can be problematic if we do not know the number of parameters in the function we are calling beforehand. This is where `apply()` comes in. To do the same thing as before, all we need to do is:

```javascript
sayGreeting.apply(person2, ["Hello", "Whats shaking??"]); // "Hello Deebo. Whats shaking??"
```

Instead of passing in the function parameters as a comma separated list, we can store them in an array and pass in the array instead. That way we can account for X amount of parameters by passing in a single array with X values. `apply()` allows you invoke a function with your parameters stored in an array while `call()` requires that they be listed as comma-separated values.

For `bind()`, you are creating a new function with the `this` property set to the object being referenced.
```javascript
let boundFunction = sayGreeting.bind(person2);

boundFunction(); // "Hello Deebo. Whats shaking??"
```
