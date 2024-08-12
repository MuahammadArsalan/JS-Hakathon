
const title = document.querySelector('#title')
const form = document.querySelector('#form')
const description = document.querySelector('#description')
const price = document.querySelector('#Price')
const div = document.querySelector('#div')
const btn = document.querySelector('#button')

let arr = [];




function render(){


  
  div.innerHTML = '';
  
  arr.map((item)=>{
    
    
    div.innerHTML += `
    
    <div class="card mt-3" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">Title :${item.title}</h5>
    <p class="card-text">Descriptiion : ${item.description}</p>
    <p class="card-text">Price : ${item.price}</p>
    <button class="btn btn-primary">Add to cart</button>
    </div>
    </div>
    `
  })
  title.value=''
  description.value=''
  price.value=''
  
}



function getFromLocalStorage(){

let GetItem = localStorage.getItem('arrLocal')
JSON.parse(GetItem);
render()

}

getFromLocalStorage()




form.addEventListener('submit',(event)=>{
  
  event.preventDefault();

console.log(title.value);
console.log(description.value);
console.log(price.value);

let obj = {
  title:title.value,
  description:description.value,
  price:price.value,
}
arr.push(obj);



 localStorage.setItem('arrLocal',JSON.stringify(arr));

 getFromLocalStorage()

render()

})












































// function AddObject(){
//     console.log('adjbj');
// let obj ={
//     title :title.value,
//     description: description.value,
//     price:price.value

// }
// arr.push(obj);


// title.value =''
// description.value =''
// price.value =''

// console.log(item);

// let arrstring = JSON.stringify(arr)
// localStorage.setItem('CartItem',arrstring)
    
// }



// function goCart(){


//     window.location = './cart.html'
// }

 


// function render(){

// }







