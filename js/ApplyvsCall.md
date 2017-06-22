**Question: What is the difference between apply and call in javascript?**

Answer: Apply and Call are native javascript functions that allow you to execute functions using the scope of the argument you pass to it.

For example:

```javascript
var person = {name: "Felicia", age: 13, weight: 100};

var sayBye = function() {
  console.log("Bye, " + this.name);
}
```

You can call `sayBye()` but it will give you errors since "this" is never declared in the scope (for this case, 'this' would be the current window). In order to use this function properly, we must pass in a scope with the necessary value, which would look like:

```javascript
sayBye.call(person);
sayBye.apply(person);
```

Both will result the same output, "Bye, Felicia". The difference between the two calls can be seen if we make a more dynamic function.

```javascript
var sayGreeting = function(greeting, question) {
  console.log(greeting + " " + this.name + ". " + question);
}

sayGreeting.call(person, "Whats up", "Hows it going?");
```

The new function `sayGreeting()` takes 2 arguments. We pass in these values into the call function as a comma separated list. Every subsequent value that we pass to `call()` corresponds to the function's arguments, so "Whats up" corresponds to the greeting parameter and "Hows it going?" corresponds to the question parameter. The resulting output would be: "Whats up Felicia. Hows it going?".

This way of passing in arguments through the call function seems simple enough, but it can be problematic if we do not know the number of arguments in the function we are calling beforehand. This is where `apply()` comes in. To do the same thing as before all we need to do is:

```javascript
sayGreeting.apply(person, ["Whats up", "Hows it going?"]);
```

Instead of passing in the function arguments as a comma separated list, we can store the arguments in an array and pass in the array instead. That way we can account for X amount of arguments by passing in a single array with X values. `apply()` allows you invoke a function with your arguments stored in an array while `call()` requires that the arguments be listed explicitly. 
