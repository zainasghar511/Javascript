// let b = 6
// function Factorial(number) {
//     let arr = Array.from(Array(number+1).keys())
//     console.log(arr.slice(1))
//    let c=  arr.slice(1).reduce((h1,h2)=>{
// return h1*h2
//     })
//     console.log(c)
// }

// Factorial(b)
// f = 12
// function fac(number){
//     let dat = Array.from(Array(number+1).keys())
//     console.log(dat.slice(1))
//     let D = dat.slice(1).reduce((h1,h2)=>{
//         return h1*h2
//     })
//     console.log(D)
// }


// fac(f)

let value = document.getElementsByClassName("box")
console.log(value)


function getRandomColor() {
 let   val1 = Math.ceil(0+Math.random()*255)
 let   val2 = Math.ceil(0+Math.random()*255)
    let val3 = Math.ceil(0+Math.random()*255)
    return `rgb(${val1},${val2},${val3})`
    
}
Array.from(value).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    console.log(e)
})