import React from 'react'
import { Link } from 'react-router-dom'
import s from './style.module.css'
import { useSelector } from 'react-redux'

export default function Basket() {

  const link = '/products/';

  const {products, basket} = useSelector(state => state);
    
  const data = basket.map(item => {
    const product = products.find(({id}) => id === item.id);
    return {...product, ...item};
  })

  const totalSum = data.reduce((acc, {price, count}) => acc + price * count, 0);

  async function postData(url = 'http://localhost:3333/order/send', data = {}) {
  const response = await fetch(url, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), 
  });
  return response.json(); 
}
postData('http://localhost:3333/order/send', { answer: 42 }).then((data) => {
  console.log(data);
});

  return (
    <div className={s.container}>
    <div className={s.cart}>
       Shopping cart
       <div className={s.link}>
       <Link to={link}>Back to the store-</Link>
       </div>
      </div>
        
        <div className={s.title}>
          <div className={s.formTitle}>
            <p>Order details</p>
            <div className={s.total}>
            <p >Total</p>
            <p >{totalSum}$</p>
            </div>
            <div className={s.number}>
              <input onClick={postData} type="text" name='Phone number' placeholder='Phone number' />
              <button onClick={postData}>Order</button>
            </div>
          </div>
        </div>
    </div>
  )
}
