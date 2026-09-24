import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


  const carditems=[
    {
      id:1,
      name:"Waffle",
      text:"Waffle with Berries",
      price:6.5,
      image:"src/assets/images/image-waffle-desktop.jpg"
    },
    {
  id: 2,
  name: "Crème Brûlée",
  text: "Vanilla Bean Crème Brûlée",
  price: 7,
  image: "src/assets/images/image-creme-brulee-desktop.jpg"
},
{
  id: 3,
  name: "Macaron",
  text: "Macaron Mix of Five",
  price: 8,
  image: "src/assets/images/image-macaron-desktop.jpg"
},
{
  id: 4,
  name: "Tiramisu",
  text: "Classic Tiramisu",
  price: 5.5,
  image: "src/assets/images/image-tiramisu-desktop.jpg"
},
{
  id: 5,
  name: "Baklava",
  text: "Pistachio Baklava",
  price: 4,
  image: "src/assets/images/image-baklava-desktop.jpg"
},
{
  id: 6,
  name: "Pie",
  text: "Lemon Meringue Pie",
  price: 5,
  image: "src/assets/images/image-meringue-desktop.jpg"
},
{
  id: 7,
  name: "Cake",
  text: "Red Velvet Cake",
  price: 4.5,
  image: "src/assets/images/image-cake-desktop.jpg"
},
{
  id: 8,
  name: "Brownie",
  text: "Salted Caramel Brownie",
  price: 4.5,
  image: "src/assets/images/image-brownie-desktop.jpg"
},
{
  id: 9,
  name: "Panna Cotta",
  text: "Vanilla Panna Cotta",
  price: 6.5,
  image: "src/assets/images/image-panna-cotta-desktop.jpg"
}
    
  ]

  function addId() {
  const newCart = carditems.map(cartId => {
    return {
      id: cartId.id,
      quantity: 0
    };
  });
  return newCart

}
function App() {
  const [count, setCount] = useState( addId())
  const [show , setshow] =useState(false)
  

  

  
  

  



function handelMines(idNumber){
 const newCount = count.map((count)=>{
    if(idNumber===count.id){

      return{
        ...count,
        quantity:count.quantity -1
      }
    }
    return count

  })
  setCount(newCount)
}
function handelplus(idNumber){
 const newCount = count.map((count)=>{
    if(idNumber===count.id){

      return{
        ...count,
        quantity:count.quantity +1
      }
    }
    return count

  })
  setCount(newCount)
}

function handldeleteItemList(itemId){
  const listDelete =count.map((item)=>{
    if(item.id===itemId){
      return{
        ...item,
        quantity:0
      }
    }
    return item
  })
  setCount(listDelete)

}



function creatCart(){
  return(
    carditems.map((carditems)=>{
      const findId =count.find((item)=>item.id === carditems.id);
      return(
      <div className='card'>

    <img className='card_img' src={carditems.image} alt="" />


    <div className='card-button-red'>

    {findId.quantity === 0 ?
    <button onClick={()=>handelplus(carditems.id)} className='card-button'> <img src="src/assets/images/icon-add-to-cart.svg" alt="" />
     Add to cart</button>:
     <div className='card-botton-red'>
    <button className='button-m-p' onClick={() =>handelMines(carditems.id) }>-</button>

    <span>{findId.quantity}</span>

    <button className='button-m-p' onClick={()=>handelplus(carditems.id)} >+</button>
  </div>}
       </div>
    <p className='card_name'>{carditems.name}</p>
    <h3 className='card_text'>{carditems.text}</h3>
    <p className='card_price'>{carditems.price.toFixed(2)}</p>

      </div>
    )})
      
  )}

  

  
  const cartLines = carditems
  .map(item => ({
    ...item,
    quantity: count.find(c => c.id === item.id).quantity
  }))
  .filter(item => item.quantity > 0)

  const totalItems = cartLines.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice =cartLines.reduce((sum,item )=>sum +(item.price *item.quantity ),0)
  



  return (
    <div className='page'>
      <h1 className='page-title'>Dessert</h1>
    
    <div className='all-item'>
      <div className='card-item'>
      
        {creatCart()}
      </div>

      <div className="shopping-cart">
        <div className='shopping-cart-item'>

  
    <h1 className='cart-items-h1'> Your cart ({totalItems})</h1>
  {cartLines.length===0?
  
  
  <div className='cart-empty'>
  <img src="src/assets/images/illustration-empty-cart.svg" alt="" />
  <p>Yoour added items Will appeare here</p>

  </div>
 :
 <div className="cart-items">
 
    {cartLines.map((item)=>{
      const priceAll = (item.price* item.quantity).toFixed(2)
      return(
        <div className='cart-items-div-all'>
       <p className='cart-items-div-item cart-item-name' > {item.name} </p>
        <div className='cart-items-div-in'>
          <div className='cart-items-div-two' >

       <p className='cart-items-div-item' style={{color: "hsl(14, 86%, 42%)", margin:"0"}}>{item.quantity}X</p>
       <p className='cart-items-div-item'>${item.price.toFixed(2)}</p>
       
       <p className='cart-items-div-item'>${ priceAll  } </p>
          </div>
       
        <img className='cart-items-div-delete' src="src/assets/images/icon-remove-item.svg" alt="" onClick={()=>handldeleteItemList(item.id)} />
        </div>
        </div>
      ) 
    })}
    
  
  <div className="cart-total">
    <span>Order Total</span>
    <strong className='cart-total-price'>{totalPrice.toFixed(2)}</strong>
  </div>
   <div className='cart-total-button-div'>

  <button onClick={()=>setshow(true)} className='cart-total-button'>Confirm Order</button>
   </div>
  </div>
  }
</div>
        </div>
         {show &&(

          
        <div className='order-confirm-overlay'>

        
        <div className='order-confirm'>
          <img src="src/assets/images/icon-order-confirmed.svg" alt="" />
          <h1 className='order-confirm_header'>Order Confirmed</h1>
          <p className='order-confirm_p' >We hope you enjoy food!</p>
          <div>
            {cartLines.map((item)=>{
              const priceAll = (item.price* item.quantity).toFixed(2)
              return(
                <div className='order-confirm_orderlist'>
                <div className='order-confirm_orderlisr_inside'>
                <img className='order-confirm_img' src={item.image} alt="" />
                <div className='order-confirm_orderlisr_inside_name'>
                  <p>{item.name}</p>
                  <div className='order-confirm_orderlisr_inside_price'>
                  <p className='order-confirm_quantity'>{item.quantity}X</p>
                  <p>@{priceAll}</p>
                  </div>
                </div>
                </div>
                <div>
                  <p> <span>{totalItems.toFixed(2)}</span></p>
                 
                </div>
                </div>
            )
          })}
          </div>
          
           <p className='confirm-order_total'>order Total  <span style={{fontSize:"20px", fontWeight:"bolder"}}>{totalPrice.toFixed(2)}</span></p>
          <div className='order-confirm_div'>
          <button className='order-confirm_button' onClick={()=>{
            setCount(addId())
            setshow(false)
          }}>Start New Order</button>
          </div>

        </div>
    </div>
    )}
    </div>
    </div>
  )
}

export default App
