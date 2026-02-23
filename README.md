1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans: getElementById is used to select one element by using an unique Id. getElementsByClassName used to select many elements by using their class name.There can be many elements which can use one class name.
querySelector can select element using selectors like id,class,tag name.It returns the first matched element. quesrySelectorAll selects all matching elements and returns a Nodelist.


2. How do you create and insert a new element into the DOM?
ans: Firstly,we create the element using document.createElement().Then we use innerHTML or innerText to insert text or inner contents. And finally we use appendChild() or append().
For example if we want to create a paragraph tag then we write like this:
const para=document.createElement('p');
para.innerText="hi my name is Mishu";
const bucket = document.getElementById("bucket);
bucket.appendChild(para);


3. What is Event Bubbling? And how does it work?
ans:It is actually like a process where an event starts from the element and moves to upward through its parents element in the DOM tree. This type of upward movement is called event bubbling.
For example there is a button inside a div.if we click the button,the event runs of the button.The the parent which is the div event runs and finally the body which is the parent of the div and body's event runs.

5. What is Event Delegation in JavaScript? Why is it useful?
ans:It means adding one event listner to a parent element instead of adding many eventlistners to child elements. This is usefull becuase it makes the code shorter and more efficient.
The elements which are created dynamically in that case it performs better.The parent can handle events for new elements without adding new eventlistner.So it improves the perofrmance.
   
7. What is the difference between preventDefault() and stopPropagation() methods?
ans: stopPropagation is used to stop the event from moving upward to parent element.It stops the process of event bubbling.preventDefault does not stop the event from bubbling.
It actually stops the default action or behaviour of an element.For example it can stop a link to open a new page.This is the main difference between them.
