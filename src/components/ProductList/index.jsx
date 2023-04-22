import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//import {useSelector} from 'react-redux'
//import Products from '../Products'
import s from './style.module.css'
import { basketAddAction } from '../../store/reducer/basketReducer';


export default function ProductList({id, image, title, price, discont_price}) {

 const picture = `http://localhost:3333/${image}`;
 const link = `/product/${id}`;
 const dispatch = useDispatch();
// вычисляем процент скидки
const saleProduct = 100 - Math.round(price / discont_price * 100);
/*const priceEnd = ({price, discont_price}) => {
  if (discont_price === null){
    return price
  }else{
    return (
      <div>
        <p>{price}</p>
        <p>{discont_price}</p>
        <p>{saleProduct}</p>
        
      </div>
    )
  }
};*/

return (
  <div className={s.item}>
    <Link to={link}>
    <img src={picture} alt={title} />
    </Link>
    <button onClick={() =>dispatch(basketAddAction(id))}>Add to card</button>
    {
      discont_price === null
      ? <Link to={link}>
        <div className={s.container}>
          <p className={s.price}>{price}$</p>
          <p className={s.title}>{title}</p>
        </div>
      </Link>
      : (
        <Link to={link}>
          <div className={s.container2}>
          <p className={s.priceOne}>{price}$</p>
            <p className={s.price}>{discont_price}$</p>
            <p className={s.discount}>{saleProduct}%</p>
            <p className={s.title}>{title}</p>
          </div>
        </Link>
      )
    }
  </div>
)
}
/*
<Link to={link} className={s.item}>
      <div className={s.products}>
       <img src={picture} alt={title} />
        <p className={s.price}>{price}$</p>
        <p className={s.discount}>{priceEnd}$</p>
        <p className={s.discount}>{saleProduct}%</p>
        <p className={s.title}>{title}</p>
      </div>
      <button onClick={() =>dispatch(basketAddAction(id))}>Add to card</button> 
  </Link>
*/


/*
<Link to={link} className={s.item}>
          <div className={s.products}>
           <img src={picture} alt={title} />
           </div>
           {
            description === null
            ? <div>
            <p className={s.price}>${price}</p>
            <p className={s.title}>{title}</p>
          </div>
          :(
            <div className={s.productsContainer2}>
              <div className={s.description}>
              <p className={s.price}>${description}</p>
              <p className={s.price1}>${price}</p>
              <p className={s.discount}>{diff}%</p>
              </div>
            </div>
          )
}

          <button onClick={() =>dispatch(basketAddAction(id))}>Add to card</button> 
      </Link>
  )
}
*/

/*
return (
      <Link to={link} className={s.item}>
          <div className={s.products}>
           <img src={picture} alt={title} />
            <p className={s.price}>{price}$</p>
            <p className={s.discount}>{discount}</p>
            <p className={s.title}>{title}</p>
          </div>
          <button onClick={() =>dispatch(basketAddAction(id))}>Add to card</button> 
      </Link>
  )
}
*/

/*
 const priceSale = ({price, discount}) => {
  if (discount !== null){
    return price
  }else {
    return (
      <div>
      <p>{price}</p>
      <p>{discount}</p>
      <p>{diff}</p>
      </div>
    )
  }
};
*/

// мщй проект
/*
<Link to={link} className={s.item}>
      <div className={s.products}>
       <img src={picture} alt={title} />
        <p className={s.price}>{price}$</p>
        <p className={s.discount}>{sale}%</p>
        <p className={s.title}>{title}</p>
      </div>
      <button onClick={() =>dispatch(basketAddAction(id))}>Add to card</button> 
  </Link>
  */

  /*
  // const diff = ({product, discount}) => {
//   const discountedPrice = product.price * (1 - discount / 100);
// }
*/
/*
const diff = ({product, discont_price}) => {
     const discountedPrice = product.price * (1 - discont_price / 100);
   }
//const sale = {price, discount} => {
//const discountAmout = (product.price * discont) / 100;}
 

//const seal = 100 - Math.round(price / discount * 100);
//const sale = 100 - Math.round( ( price - discount ) / price * 100 );
*/