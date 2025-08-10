

let input=document.getElementById("inputBox");
let button=document.querySelectorAll("button");
// console.log(button);
// querySelectorAll() returns a NodeList, not a real array.

let str=""; 
// result will store here
let arr=Array.from(button);
// console.log(arr); //btn btn btn .....  

arr.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            str = eval(str);
            input.value = str;
        }else if(e.target.innerHTML=='AC') {
            str="";
            input.value=str

        }else if(e.target.innerHTML=="DEL"){
            str=str.substring(0,str.length-1);
            input.value=str
        }
        else{
            str += e.target.innerHTML;
            input.value = str;
        }
         
    });
});






//! value
// value is a built-in property of form input elements (<input>, <textarea>).
// It represents the text currently shown inside the input field.



//! What is eval() in JavaScript?
// eval() is a JavaScript built-in function that takes a string and executes it as JavaScript code.


// let x = 10;
// let y = 20;
// let result = eval("x + y");
// console.log(result); // 30

// eval() in the DOM context
// When used in a browser, eval() runs in the current scope and can:

// Access DOM elements

// Modify HTML/CSS dynamically

// Execute user-provided JavaScript strings

// Example: DOM modification with eval()

// <!DOCTYPE html>
// <html>
// <body>
//     <h1 id="myHeading">Hello</h1>
//     <script>
//         let code = "document.getElementById('myHeading').innerText = 'Changed with eval()!'";
//         eval(code);
//     </script>
// </body>
// </html>
