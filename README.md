# JavaScript

## Context:

<ul style="font-size: 16px; font-family: Verdana;">
    <li>
        <p>In JavaScript, the term <strong><em style="color: red;">context</em></strong> generally refers to the value of <strong><em style="color: red;">this</em></strong> within a particular part of code. Understanding context is crucial for understanding how methods and functions behave when they are called, especially in relation to object-oriented programming and event handling.</p>
    </li>
    <li>
        <h3>What is Context?</h3>
        <p>Context is determined by how a function is called and refers to the object to which a function belongs. It is represented by the keyword <strong><em style="color: red;">this</em></strong> inside a function. The value of <strong><em style="color: red;">this</em></strong> can change depending on how the function is invoked.</p>
    </li>
    <li>
        <h3>Determining the Context</h3>
        <p>The value of <strong><em style="color: red;">this</em></strong> in different scenarios:</p>
        <ol>
            <li>
                <h4>Global Context:</h4>
                <p>When code is executed in the global context, <strong><em style="color: red;">this</em></strong> refers to the <strong><em style="color: red;">global object</em></strong> (e.g., window in browsers, global in Node.js).</p>

```js
console.log(this); // In browsers, this refers to the window object
```

</li>
            <li>
                <h4>Function Context:</h4>
                <p>In a regular function, <strong><em style="color: red;">this</em></strong> refers to the global object in non-strict mode, and undefined in strict mode.</p>

```js
function showThis() {
  console.log(this);
}
showThis(); // Global object (window in browsers) or undefined in strict mode
// In browsers, this refers to the window object
```

</li>
            <li>
                <h4>Method Context:</h4>
                <p>When a method is called as a property of an object, <strong><em style="color: red;">this</em></strong> refers to the object the method is called on.</p>

```js
const obj = {
  value: 42,
  showThis: function () {
    console.log(this);
  },
};
obj.showThis(); // `this` refers to `obj`
```

</li>
            <li>
                <h4>Constructor Context:</h4>
                <p>When a function is used as a constructor (with the <strong><em style="color: red;">new</em></strong> keyword), <strong><em style="color: red;">this</em></strong> refers to the newly created instance.</p>

```js
function MyObject() {
  this.value = 42;
  console.log(this);
}
const instance = new MyObject(); // `this` refers to the new instance
```

</li>
            <li>
                <h4>Explicit Binding:</h4>
                <p>Using <strong><em style="color: red;">call, apply, or bind,</em></strong> you can explicitly set the value of <strong><em style="color: red;">this</em></strong>.</p>

```js
function showThis() {
  console.log(this);
}
const obj = { value: 42 };
showThis.call(obj); // `this` refers to `obj`
```

</li>
            <li>
                <h4>Arrow Functions:</h4>
                <p>Arrow functions do not have their own <strong><em style="color: red;">this</em></strong> binding. Instead, <strong><em style="color: red;">this</em></strong> is lexically inherited from the parent scope at the time, the arrow function is defined.</p>

```js
const obj = {
  value: 42,
  showThis: () => {
    console.log(this);
  },
};
obj.showThis(); // `this` refers to the global object (or undefined in strict mode) because `this` is inherited from the parent scope
```

</li>
        </ol>
    </li>
        <li>
            <h4>Example to Illustrate Different Contexts</h4>

```js
// Global context
console.log(this); // `this` refers to the global object (window in browsers)

// Function context
function showThis() {
  console.log(this); // `this` depends on how the function is called
}
showThis(); // `this` refers to the global object (or undefined in strict mode)

// Method context
const obj = {
  value: 42,
  showThis: function () {
    console.log(this); // `this` refers to `obj`
  },
};
obj.showThis(); // `this` refers to `obj`

// Constructor context
function MyObject() {
  this.value = 42;
  console.log(this); // `this` refers to the new instance
}
const instance = new MyObject(); // `this` refers to the new instance

// Explicit binding
function showThis() {
  console.log(this); // `this` depends on how the function is called
}
const anotherObj = { value: 42 };
showThis.call(anotherObj); // `this` refers to `anotherObj`

// Arrow function context
const objWithArrow = {
  value: 42,
  showThis: () => {
    console.log(this); // `this` is inherited from the parent scope
  },
};
objWithArrow.showThis(); // `this` refers to the global object (or undefined in strict mode)
```

</li>
        <li>
            <h4>Summary</h4>
            <ul>
                <li>
                    <p>
                        Context is determined by how a function is called and is represented by <strong><em style="color: red;">this</em></strong> inside the function.
                    </p>
                </li>
                <li>
                    <p>
                        Different ways of calling a function (global, method, constructor, explicit binding, and arrow functions) result in different values of <strong><em style="color: red;">this</em></strong>.
                    </p>
                </li>
                <li>
                    <p>
                        Understanding context is crucial for effective use of <strong><em style="color: red;">this</em></strong>, especially when dealing with object-oriented programming, event handling, and callbacks in JavaScript.
                    </p>
                </li>
            </ul>
        </li>
</ul>
<br>

## Execution Context:

<div style="font-size: 16px; font-family: Verdana;">
  <p>Everything inside the JavaScript happens inside the Execution context.</p>
  <p>In the container the first component is Memory Component(Variable Environment) and second one is Code Component(Thread of Execution).</p>
  <p>
    <img src="./public/memory_and_code.jpg" alt="memory and code" title="Memory and Code">
  </p>
  <p>Memory component has all the variables and functions in key value pairs. It is also called variable environment.</p>
  <p>Code component is the place where code is executed one line at a time. It is also called Thread of execution.</p>
  <p>JavaScript is synchronous, single threaded language.
    <ul>
      <li>Synchronous: one command at time.</li>
      <li>Single Threaded: In a specific synchronous order</li>
    </ul>
  </p>
  <h3>How .js is executed and callstack?</h3>
  <p>When .js program is ran, a global execution context is created in two phases.</p>
  <p>
    <ol>
      <li>Memory allocation phase</li>
      <li>Code Execution pahse</li>
    </ol>
  </p>
  <p>
    <img src="./public/code_snippet_execution_context.jpg" alt="code" title="code">
  </p>
  <h4>Memory allocation phase:</h4>
  <p>
    <ol>
      <li>
        <p>The very first thing which JS does is memory allocation, so it goes to line 1 of above code and allocates a memory space for variable <strong><em style="color: red;">n</em></strong> and then goes to line 2 and allocate a memory space for function <strong><em style="color: red;">square</em></strong>. When allocating memory for <strong><em style="color: red;">n</em></strong> it stores <strong><em style="color: red;">undefined</em></strong>, a special value for <strong><em style="color: red;">n</em></strong>.</p>
      </li>
      <li>
        <p>For the function <strong><em style="color: red;">square</em></strong>, it stores the whole code of the function inside its memory space.</p>
      </li>
      <li>
        <p>Same is for <strong><em style="color: red;">squareNum</em></strong> and <strong><em style="color: red;">squareNum2</em></strong> it allocates memory and stores <strong><em style="color: red;">undefined</em></strong> for them.</p>
      </li>
      <li><p>This is the end of memory allocation phase</p></li>
    </ol>
  </p>
  <p>
    <img src="./public/memory_allocation_phase.jpg" alt="Memory allocation phase" title="Memory allocation phase">
  </p>
</div>
