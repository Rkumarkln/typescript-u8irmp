// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
const re_dup: HTMLElement = document.getElementById('remove_duplicate');
const sum_of_digit: HTMLElement = document.getElementById('sod');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

var chars = [1,2,3,3,4,5,6,6,6,3];
var a = [];
chars.forEach((element, index) => {
  if(`${chars.indexOf(element)}` == `${chars.lastIndexOf(element)}`){
      a.push(element);
  }
  //console.log(`${element} - ${index} - ${chars.indexOf(element)}`);
});
re_dup.innerHTML = a;

let num = 875496484;
let sod = sumDigits(num);
sum_of_digit.innerHTML = sod;
function sumDigits(n){
  let numArr = n.toString().split("");

  let sum = numArr.reduce(function(a, b){
      return parseInt(a) + parseInt(b);
  }, 0);
  
  return sum;
}