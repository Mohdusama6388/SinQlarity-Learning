what is Node.js ?
Node.js is an open-source ,cross plarform runtime environment for executing javascript code outside a browser
Designed to build scalable and performant applications .
known for its asynchronous ,non blocking architecture
.............................

what does single-Threaded Mean ?
single- threaded: Executes all tasks in a single sequence using one thread.
A single execution context processes tasks one at a time .
contrasts with multi- threaded envirnments that execute miltiple tasks simultaneously .
.....................

what is Exception hanling ?
 unexpected or exceptional condition 
Disrupts normal program flow 
caused by runtime errors,logic errors,or system errors
leads to unintended behavior if not handled
programming languages provide exception handling mechanisms(try ,catch ,etc)
crucial for software stability and reliability.
......................
How to handle Exception in NodeJS ?
Try...Catch Blocks
Error-first Callback Pattern
Promise Catch
Async/await try...catch
Uncaught Exception Handling
Unhandled Promise Rejection Handling 
....................
what is try..catch Blocks ?
standard way of handling exception in javascript 
Wrap code that might throw an error in a try block 
catch the Exception in a catch block 
Example : 
try{
    const result =someoperation();
    console.log(result);  
} catch(error){
  console.error('An error Occurred :',error)  
}
........................ 
what is Error-first Callback pattern?
common in Nodejs for asynchronous operations
First argument of the callback is reserved for an error object 
if an error occurs ,handle it in the callback function 
Example :
fs.readFile('file.txt',(err,data)=>{
    if(err){
        console.error('Error reading file;',err);
        return;
    }
    console.log(data.toString());
})
.....................
what is promise catch ?
Used when working with promises
the.catch() method catches any rejected promises
Handle exceptions thrown by async operation in the catch block

...........................
what is async/await try...catch?
used with async/await syntax for asynchronous operations
wrap the await expression in a try..catch block 
catch any exception thrown by the asynchronous operation.
...........................
what is uncaught Exception Handling?
Handles exceptions that are not caught anywhere in your code 
Listen for the 'uncaughtException' event on the process object 
provide a centralized way to handle uncaught exception.
..........................
what is Unhandled Promise Rejection Handling ?
Handles promise rejections that are not caught 
listen for the 'unhandledRejection' Event on the process object 
prevent silent failures and handle unexpected promise rejection .
...........................
what is callback ?
A callback is a function passed as an agrument to another function , to be excuted after some operation has been completed
It allows for asynchronous programming and helps avoid blocking the main thread 
callbacks are commonly used in javaScript for handling events,timers ,and asynchronous operation like network requests or file I/o
.............................
what is callback hell ?
callback hell also known as the pyramid of doom refers to the excessive nesting of callbacks within callbacks
It occur when you have multiple asynchronous operations that depends on the completion of one another 
As the number of nested callbacks increases ,the code becomes harder to read ,maintain, and reason about, leading to a confusing and convoluted control flow 
...........................

How to avoid callback hell ?
Modularize your code ; Break down your logic into smaller ,reusable function to reduce nesting 
used named function instead of anonymous function for better readability 
Embrace modern Javascript features like Promises and async/await for cleaner and more readable asynchronous code .
.........................

what is Event loop ?
The event loop is central part of Node.js architecture,responsiple for executing code and managing asynchronous operations 
It continuosly checks for new events and processes them one by one ,enabling Node.js to handle concurrent operations efficiently 
........................
what is infinite loop or recursion 

A function calls itself recursively without a termination condition or a loop that never exits 
Explanation : Infinite loops or recursive function that don't terminate can block the event loop indefinitely, causing the application to become unresponsive 
.........................
What is Anti-Patterns
Anti-patterns are coding practices that might seem loke quick fixws but lead to long term issue .
They includes things like 'god objects' 'Spaghetti code ','magic numbers' and 'copy paste coding '.
 ........................
what is God objects ?
a single object that knows too much or does too much ,violating the single Responsibility principle . 
.........................
 what is Spaghetti code ?
 code with a complex and tangled structure , making it difficult to follow or maintain 
...........................
what is Buffer ?
A Buffer in Node.js is a temporary storage area for a chunk of binary data 
buffers are typically used when you need to work with binary data that isnot streaming .
They are often used for handling I/O operation ,like reading files or data from a network ,when you need to manipulate or process the entire data at once .
........................... 
 what is stream ?
 A stream is a continuoous flow of data.
 Streams are used when data doesn't need to be loaded all at once and can be processed piece by piece .
 this makes them ideal for working with files ,network requests ,or any other kind of continuous data flow .
.............................
 Types of streams in Node.js
 In Node.js there are four types of streams.
 Readable : for reading data ,eg fs.createReadstream
 writable : for writing data ,eg, fs.createWriteStream. 
 Duplex: for both reading and writing data eg, net.shocker 
 Transform: for modifying data while reading/writing eg, zlib.createGzip
............................
 what is the purpose of package.json ?
 purpose;
 project metadata: contains essential information about your project, such as name, version, description, author ,licence,and scripts 
 Dependency Declaration : specifies the dependencies your project needs to function correctly. these dependencies can be listed with version ranges (eg, "^1.0.0" for major version compatibility).
 key features: human readiable and flexible
..............................
 package-lock.json 
 purpose :
 Dependency locking : Generated by npm when you run npm install .It records the exact versions of all installed dependencies (including nested dependencies) and their integrity hashes. 
 key features: Machine-readable ,Deterministic,Reproducibility.
.............................
 what is middlewares ?
 Middlewares are function that have access to :
 The request object(req)
 The response object(res)
 The next middleware function in the application's request-response cycle .
 characteristics 
 Middleware functions can:
 Execute any code 
 make changes to the request and response objects 
 End the request-response cycle 
 call the next middleware in the stack 

 Types of middleware 
 Application level middleware 
 Router-Level Middleware
 Error-Handling Middleware
 Authentication Middleware 
 logging Middleware etc
.........................
 what is next() function in Nodejs ?
A function passed as the third argument in middleware.
controls the flow of request cycle .
Tells Express to move to next middleware in the stack 
 




