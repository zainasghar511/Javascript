

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
