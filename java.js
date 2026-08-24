let b = 6
function Factorial(number) {
    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice(1))
   let c=  arr.slice(1).reduce((h1,h2)=>{
return h1*h2
    })
    console.log(c)
}

Factorial(b)
f = 12
function fac(number){
    let dat = Array.from(Array(number+1).keys())
    console.log(dat.slice(1))
    let D = dat.slice(1).reduce((h1,h2)=>{
        return h1*h2
    })
    console.log(D)
}


fac(f)