import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { basketDecrementAction, basketIncrementAction } from '../../store/reducer/basketReducer';

export default function BasketItem({id, title, price, count, image, discont_price}) {

  const dispatch = useDispatch(); 
  
  const picture = `http://localhost:3333/${image}`;

  return (
    
      <div className={s.container}>
        <div className={s.picture}>
          <img src={picture} alt={title} />
        </div>
          <div className={s.cardContainer}>
            <p>{title}</p>
          </div>
            <div className={s.btns}>
              <button onClick={()=>dispatch(basketIncrementAction(id))}>+</button>
              <p>{count}</p>
              <button onClick={()=>dispatch(basketDecrementAction(id))}>-</button>
            </div>
              <div className={s.price}>
                <p>${price}</p>
                <p>{discont_price}$</p>
              </div>
              <div className={s.closeIcon}>
                <p  onClick={()=>dispatch(basketDecrementAction(id))}>X</p>
                
              </div>
              
          
      </div>
           
  )
}
      /*  
      {product.discont ? <span>${product.price - (product.price * discont)}</span>
                : <span>${product.price}</span>}
      
      <button onClick={()=>dispatch(basketClearAction())}>Oчистить корзину</button>
      
      
      
      <div className={s.cart}>Shopping cart</div>
        
        <div className={s.title}>
          <div className={s.formTitle}>
            <p>Order details</p>
            <p className={s.formTwo}>Total</p>
            <p className={s.formThree}>${price}</p>
            <div className={s.input}>
              <input type="text" name='Phone number' placeholder='Phone number' />
              <button>Order</button>
            </div>
          </div>
        </div>
*/
 