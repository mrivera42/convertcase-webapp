// 'use strict';
// get text area content
let content = document.getElementById("content").value;

// // sentence case button click
// const sentenceBtn = document.querySelector('#sentence');
// sentenceBtn.addEventListener('click',function() {
//     let contentLower = content.toUpperCase();
//     // contentLower[0].toUpperCase();
//     document.getElementById('content').value = contentLower;
// });

// lower case button click
const lowerBtn = document.querySelector('#lower');
lowerBtn.addEventListener('click', function() {
    document.getElementById("content").value = content.toLowerCase();
});

// upper case button click 
const upperBtn = document.querySelector('#upper');
upperBtn.addEventListener('click',function() {
    document.getElementById("content").value = content.toUpperCase();
});





// document.getElementById("content").value = "This is a test...";
