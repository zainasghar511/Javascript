// const inputdata = document.querySelector(".input");
// const span = document.querySelector(".span");


// inputdata.addEventListener('input',function (e) {
//     const typetext = e.target.value;
//     span.textContent = typetext
//     if(typetext.length<10){
//           span.textContent = typetext.length
//     }else if(typetext.length>10){
//         console.log("high")
//     }
//     else{
//         console.log("low")
//     }
// })
let random = Math.random()
let a = prompt("Enter first Number")

let b = prompt("Enter operation")
let c = prompt("Enter second Number")
let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"//"
}

if (random>0.1) {
    alert(`Your result is ${eval(`${a} ${b} ${c}`)}`)
    
} else {
    c=obj[c]
   alert(`Your result is ${eval(`${a} ${b} ${c}`)}`)
   
}