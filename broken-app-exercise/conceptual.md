### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

    - Asynchronous Callbacks
      - a way of passing an asynchronous function as an argument inside of another function
        the function will run like normal, then when the passed in function is called, the 
        asynchronous code will begin without pausing the rest of the synchronous function
    
    - Promises with .then() .catch()
      - promises are a one time guarantee of a future value. You can use promises to obtain
        a resolved or rejected value. Once obtained, the value can be viewed and used with the 
        use of .then() and .catch()

    - Promise Chaining 
      - uses the .then() and .catch() methods to return a new promise and then 'chain' this 
        new promise to the next .then() method. With this system, there is only a single .catch()
        method required.

    - Promises with async & await 
      - with the use of async and await you can make a function asynchronous. This will in turn 
        return a value wrapped in a resolved promise. With the use of the await keyword, we can await 
        the response and set the response of a request to a variable. In this case there is no need 
        for a then() or even a callback. 

- What is a Promise?

  - A one time guarantee of a future value 

- What are the differences between an async function and a regular function?

  - Regular Function
    - are synchronous, run one operation at a time
    - return a value once their execution is complete, the calling code waits for the function to 
      finish before moving to the next line 
    - do not inherently support asynchronous behavior, if for example a request takes a long time
      it could cause the program to become unresponsive 
    
  - Asynchronous Function 
    - will allow other operations to continue while waiting for asynchronous tasks to complete 
    - will use callbacks or promises to manage asynchronous operations 
    - will use the JavaScript event loop ( mechanism in JavaScript that handles asynchronous operations by 
      offloading them to the browser or runtime environment, it continuously checks the message queue
      for new events or messages )

- What is the difference between Node.js and Express.js?

  - Node.js
    - a JavaScript runtime environment that runs server-side 
    - can be used to build any kind of server-side JavaScript 
    - uses the chrome V8 engine but does not require to use chrome
    - great for working with real time, simultaneous data operations due to being asynchronous and non-blocking
  
  - Express.js
    - a web application framework for Node.js
    - 

- What is the error-first callback pattern?

  - the callback functions first parameter should be listed as an error. Node will supply an error object is something
    'bad' happens, otherwise null as arguments
  - then follow other parameters if any

- What is middleware?

  - code that runs in the middle of the request / response cycle 
  - in Express, middleware are functions that get access to the req and res objects and can also call the next function

- What does the `next` function do?

  - when this function is called it instructs Express to move to the next middleware function in the stack.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

    - this asynchronous function fetches data sequentially and if there were say hundreds of requests, this
      could cause latency. 
    - there is no form of error handling in this function, so if something goes wrong with the request,
      nothing further is being done with the response 
    - perhaps create a function that when a name is passed in, it will make a request and display the necessary data 
    - the return order of the data is not the same as when the requests were made

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
