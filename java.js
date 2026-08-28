

let press = document.querySelector(".press")
console.log(press)

press.addEventListener('click',data=()=>{
    console.log("you are  clicking me")
  const para =document.createElement("p");
  para.textContent = "Thanks for pressing me"
  document.body.appendChild(para)
    setTimeout(() => {
         const love = document.createElement("h3")
    love.textContent = "I Love You"
    document.body.appendChild(love)
        
    }, 2000);
  
})



const number = [12,3,5,7,89,99]
const double = number.map(number=>number*2)
console.log(double)
const f = number.filter(number=>number%2===0)
console.log(f)
function data(wait) {
    console.log("ks cheez ka wait kr rhy ho")
    setTimeout(() => {
        const name = "hurry i am here what are you searching"
        wait(name)
    }, 2000);
}
function mill(ok) {
    console.log("shukr hai data mill gya", ok)
}
data(mill)
const datapromise = new Promise((resolve,rejected)=>{
    console.log("just wait maybe i will come")
    setTimeout(() => {
        const oh = true;
        if (oh) {
            resolve({name:"zain",RollNumber:45, course :"computer science"})
            
        }else{
            rejected("we are fatching some eror")
        }
    }, 3000);
})
datapromise.then((maybe)=>{
    console.log("mill tu gya hai data",maybe)
}).catch((erormsg)=>{
    console.log("ya umeed nai the tm sy",erormsg)
})