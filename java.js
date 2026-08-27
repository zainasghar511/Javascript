let view = document.querySelector(".view");
let data = document.querySelector(".data");
let btn1 = document.querySelector(".click");
let check = document.querySelector(".check");

btn1.addEventListener("dblclick",()=>{
view.innerHTML = Date()
})
setInterval(() => {
    data.innerHTML  += "you are made"
}, 2000);