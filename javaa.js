let item = document.querySelector('.input1')
let next = document.querySelector('.next')
let price = document.querySelector('.input2')
let submit = document.querySelector('.submit')
let runtotal = 0
let itemtotal = 0


submit.addEventListener('click',press=()=>{
    let itemval = item.value;
    let priceval = Number( price.value)

  if(itemval ==''){
alert("please write the item name")
  }
  if(priceval ==''){
    alert("please write the item price")
  }
  let containerdata = document.createElement('div')
  let values = document.createElement('p')
  let deletbtn = document.createElement('button') 
  values.textContent = `Item Name: ${itemval} Item price : ${priceval}`
  deletbtn.textContent ='x'
  itemtotal++;
  containerdata.appendChild(values)
  containerdata.appendChild(deletbtn)
  document.body.appendChild(containerdata)



  let sumtotal = document.querySelector('.H2')

  if(sumtotal){
    sumtotal.textContent = itemtotal
  }
    
  
 

   runtotal += priceval
    let totaldiv = document.querySelector('.H1')
    if(totaldiv){
        totaldiv.textContent = runtotal
    }
deletbtn.addEventListener('click',touc=()=>{
itemtotal--
if(totaldiv){
    totaldiv.textContent = itemtotal
}
    containerdata.remove()
    runtotal -= priceval
    if(sumtotal){
        sumtotal.textContent = runtotal
    }
})
  
  console.log(priceval,itemval)
 item.value =""
 price.value =""
})
next.addEventListener('click',data=()=>{
    let date =  new Date()
    let da = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()
    let timetable = document.createElement('P')
    timetable.textContent = `${da} ${month} ${year} `
    document.body.appendChild(timetable)
    console.log(date)
})







 
//  let deletebtn = document.createElement('button')
// deletebtn.textContent = 'x'

//    let para = document.createElement("P")
// submit.addEventListener('click', press= ()=>{
    
//       let itemval = item.value;
//     let pri = Number (price.value)
//     if(pri==""){
//         alert("enter some number")
//     }
//     if(itemval==""){
//         alert("item name write ")
//     }
    
  
//     console.log(pri)
//     console.log(itemval)
  
//   if(item.value !==''){


//    para.textContent = `item Name: ${itemval}| item Price:${pri} `
//    console.log(deletebtn)
//    document.body.appendChild(para)
//    document.body.appendChild(deletebtn)
// }

//   if (price.value!=='') {
//     runtotal += pri
//     let divtotal = document.querySelector('.H1')
  
//     if(divtotal){
//           divtotal.textContent = runtotal
//     }
//     else{
//         console.log("total",runtotal)
//     }
    
//   }
//  price.value="";
//  item.value = "";
// })
// deletebtn.addEventListener('click',del=()=>{

// if(deletebtn !== null){

// para.remove()

// deletebtn.remove()
// runtotal -= pri;
// if(runtotal){
//     runtotal.textContent = runtotal
// }
// }
// })
