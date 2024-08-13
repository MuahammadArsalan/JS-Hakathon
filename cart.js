
let cartArr = [];

function render(){
        
    div.innerHTML = '';
    
  cartArr.map((item,index)=>{
        
        
        div.innerHTML += `
      
      <div class="card mt-3" style="width: 18rem;">
      <div class="card-body">
      <h5 class="card-title">Title :${item.title}</h5>
      <p class="card-text">Descriptiion : ${item.description}</p>
      <p class="card-text">Price : ${item.price}</p>
      <p class="card-text">Quantity : ${item.quantity} <button onclick="Increment(${index})">+</button>  <button onclick="Decrement(${index})">-</button></p>
      </div>
      </div>
      `
    })
    
}

let  get = JSON.parse(localStorage.getItem('cartArr'));

cartArr.push(+get);
if(cartArr=get){
    
render()
}else{
cartArr = ''
div.innerHTML=''
}



function Increment(index){

    console.log(cartArr[index].quantity);
}
function Decrement(index){
    
    console.log(cartArr[index].quantity);

}















