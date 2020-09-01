This repo gives us an overview of what is testing. We use `Jest` for these purposes because it is easy to work with and has great documentation.

**Explanation**

> Jest is a testing library made with the idea of writing and editing the code without worries about making mistakes.

**This project**  
This project represents three different functions `sum`, `cloneArray`, and `subtract`. They are not complex but can give us the idea how to start with testing. For tests in greater detail, we can pass to our package.json file `jest --coverage` instead only `jest`.

**Sum**  
The sum is a simple function that takes two arguments and adds them. So, the test would be to check if the value that we get is equal to the sum of the arguments. The Jest's syntax is basic and it's writing a text. Therefore, we pass a string that is the description and as a second parameter, we write a function that does the magic. Everything afterward is pretty simple. We write the following function `expect` and we pass the unit or the module we want to test. Then we can choose what we want from the function. In this case, we look for a value that is the sum of the two arguments, and we write `.toBe`.

**Clone Array**  
Clone array, as its name says, takes an array and returns a clone. The test is **almost** the same, but we get a brand-new array with a new place in the memory, which means that the array we pass and the other we get won't be the same, so in this scenario, we check for the equality of the arrays. This is possible thanks to the function `.toEqual`

**Subtract**  
This example is the same as the sum function. Besides, we could say that **JEST** allow us not only to look for exact value but also to check if something is not the same or equal with the following keyword `.not`.

**Summary**  
**Jest** is a great unit testing library that allows us to write sufficient tests that can help us during writing or changing new functions. Imagine we have the first function sum and we refactor the code, and somehow instead of `a + b`, we write `a + a` the result won't be satisfying.
