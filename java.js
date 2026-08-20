const inputdata = document.querySelector(".input");
const span = document.querySelector(".span");


inputdata.addEventListener('input',function (e) {
    const typetext = e.target.value;
    span.textContent = typetext
    if(typetext.length>10){
          span.textContent = typetext
    }else if(typetext.length<10){
        console.log("high")
    }
    else{
        console.log("low")
    }
})

