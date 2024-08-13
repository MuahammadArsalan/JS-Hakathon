
const title = document.querySelector('#title')
const form = document.querySelector('#form')
const description = document.querySelector('#description')
const price = document.querySelector('#Price')
const div = document.querySelector('#div')
const addCartBtn = document.querySelector('#addtocart')
const btn = document.querySelector('#button')

let arr = [];
let cartArr = [];





function render(){
  
  
  
  div.innerHTML = '';
  
  arr.map((item,index)=>{
    
    
    div.innerHTML += `
    
    <div class="card mt-3" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">Title :${item.title}</h5>
    <p class="card-text">Descriptiion : ${item.description}</p>
    <p class="card-text">Price : ${item.price}</p>
    <button class="btn btn-primary" id="addtocart" onclick="addToCart(${[index]})">Add to cart</button>
    </div>
    </div>
    `
  })
  title.value=''
  description.value=''
  price.value=''
  
}





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
  
  
  
  let set= localStorage.setItem('arr',JSON.stringify(arr));
  
  render()

  
  
  
  
  
})  


window.addEventListener('load',()=>{
  
  arr=[]
  let get = JSON.parse(localStorage.getItem('arr'))
  arr.push(get)  
  
  
  if(arr=get){
    render()
  }else{
    arr=[]
    
    div.innerHTML=''
    
  }

})

function addToCart(index){
  if(cartArr.includes(cartArr[index])){
    cartArr[index].quantity +=1

  }else{
    cartArr[index].quantity = 1
    cartArr.push(cartArr[index].quantity)
  }
  cartArr.push(arr[index]);
  
  console.log(cartArr);
localStorage.setItem('cartArr',JSON.stringify(cartArr));

}



function gocart(){
  window.location= 'Cart.html'
}




































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







