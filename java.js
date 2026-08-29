

// let press = document.querySelector(".press")
// console.log(press)

// press.addEventListener('click',data=()=>{
//     console.log("you are  clicking me")
//   const para =document.createElement("p");
//   para.textContent = "Thanks for pressing me"
//   document.body.appendChild(para)
//     setTimeout(() => {
//          const love = document.createElement("h3")
//     love.textContent = "I Love You"
//     document.body.appendChild(love)
        
//     }, 2000);
  
// })



// const number = [12,3,5,7,89,99]
// const double = number.map(number=>number*2)
// console.log(double)
// const f = number.filter(number=>number%2===0)
// console.log(f)
// function data(wait) {
//     console.log("ks cheez ka wait kr rhy ho")
//     setTimeout(() => {
//         const name = "hurry i am here what are you searching"
//         wait(name)
//     }, 2000);
// }
// function mill(ok) {
//     console.log("shukr hai data mill gya", ok)
// }
// data(mill)
// const datapromise = new Promise((resolve,rejected)=>{
//     console.log("just wait maybe i will come")
//     setTimeout(() => {
//         const oh = true;
//         if (oh) {
//             resolve({name:"zain",RollNumber:45, course :"computer science"})
            
//         }else{
//             rejected("we are fatching some eror")
//         }
//     }, 3000);
// })
// datapromise.then((maybe)=>{
//     console.log("mill tu gya hai data",maybe)
// }).catch((erormsg)=>{
//     console.log("ya umeed nai the tm sy",erormsg)
// })

// const chaibano =  new Promise((resolve,reject)=>{
//     console.log("dkhy ap  chaiy pee k jty ho k nai abi ")
//     setTimeout(() => {
//     let check = true;
//     if(check){
//         resolve("pani grm hai bs 2 mint lgy gy")
//     }else{
//         reject("sorry gass tu khtm hai")
//     }
//     }, 3000);
// })
// chaibano.then((bny)=>{
//     console.log("lo pee lo" ,bny)
// }).catch((nai)=>{
//     console.log("ab pnai du ",nai)
// })
// 1. Function banaya jo callback leta hai
// function assignmentCheck(callback) {
//     console.log("Assignment check ho rhe hai wait...");
    
//     setTimeout(() => {
//         let resultMessage = "Mubarak ho! Assignment pass ho gayi.";
//         // 2. Yahan callback ko call kiya aur message pass kiya
//         callback(resultMessage);
//     }, 2000);
// }

// // 3. Yeh hamara callback function hai
// function meraResult(msg) {
//     console.log("Result mila:", msg);
// }

// // 4. Function ko call kiya aur callback pass kiya
// assignmentCheck(meraResult);
// // Har 1 second (1000ms) ke baad yeh chalta rahega
// let counter = 0;
// const timer = setInterval(() => {
//     counter++;
//     console.log(`Clock tick: ${counter} second guzar gaya`);
    
//     // Agar counter 3 tak pohanch jaye toh setInterval ko rok do (Clear kar do)
//     if (counter === 3) {
//         clearInterval(timer);
//         console.log("Timer rok diya gaya!");
//     }
// }, 1000);



fetch ('https://jsonplaceholder.typicode.com/todos/1')
.then(response=>response.json())
.then(data=>console.log("we get data",data))
.catch(error=>console.log("facing some eror",error))


async function savedata() {
    try{
        console.log("we are waiting for data");
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const realdata = await response.json();
        console.log("finally we get data",realdata)
    }catch(eror){
        console.log("we face some temporary eror",eror)
    }
}