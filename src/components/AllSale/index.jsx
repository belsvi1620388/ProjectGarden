import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import s from './style.module.css'
import { useEffect } from 'react'
//import { loadProducts } from '../../store/asyncActions/products';
import ProductList from '../ProductList'
import { productsCheckboxAction, productsPriceFilterAction, sortProductAction} from '../../store/reducer/productsReducer';

export default function AllSale({title}) {
  const [price, setPrice] = useState({min: -Infinity, max: Infinity});

  const setMaxPrice = (event)=> {
   setPrice( pre => 
     ({...pre, max: +event.target.value || Infinity}));
  };
  const setMinPrice = (event)=> {
   setPrice( pre => 
     ({...pre,min: +event.target.value || -Infinity}));
  };
 
     const dispatch = useDispatch();
 
 
     const onChangeOrder = event => {
       const value = event.target.value;
       dispatch(sortProductAction(value))
   }

   useEffect(()=>{
     dispatch(productsPriceFilterAction(price));
   }, [price])
     
 

     //sale
  const products = useSelector(
    ({products}) => {
        return products.filter(item => item.discont_price !== null)
      } 
  );

  return (
    <div className={s.item}>
        <div className={s.saleProducts}>Products with sale</div>
          <div className={s.formBlock}>
            <form className={s.form} >
              <p className={s.price}>Price</p>
              <input onChange={setMinPrice} type="number" name='title' placeholder='from' />
              <input onChange={setMaxPrice} type="number" name='price' placeholder='to'  />
             
              <p className={s.sorted_paragraf}>Sorted</p>
              <select onChange={onChangeOrder}  list="sorted" type='text' placeholder='by default'>
                <option value='price' >price</option>
                <option value='discount' >discount</option>
              </select>
            </form>
          </div>

          <div className={s.block}>
      {
        products
        .filter(({show}) => Object.values(show).every(item => item))
        .map((item) => <ProductList key={item.id} {...item} />)
      }
      </div>

      </div>
        
  )
}
/*
<div className={s.wrapper}>
      <div className={s.item}>
        <h1>Products with sale</h1>
      </div>
      
      <form className={s.form} onSubmit={onSubmit} >
        

        <div className={s.prise}>

          <div className={s.blockPrice}>
            <p>Price</p>
            <input type="text" name='title' placeholder='from' onChange={onChange} />
            <input type="text" name='price' placeholder='to' onChange={onChange} />
          </div>
        
          <div className={s.blockSorted}>
            <p >Sorted</p> 
            <input type="text" name='discount' placeholder='by default' onChange={onChange}/>
          </div>
        </div>
      </form>
    </div>
*/
/*const data = discont_price.map(item => {
    const product = products.filter(({id}) => id === item.id);
    return {...product, ...discont_price};
  })
  /*
  const priceEnd = ({prodcts, discont_price}) => {
    if (discont_price === null){
      return discont_price
    }
  }
//const dispath = useDispatch();
/*  useEffect(()=> {
    dispath(loadProducts)
  }, []);*/

   /* const onSubmit = event =>{
        event.preventDefault();
        const {title, price, discount} = event.target;
        
       // console.log(title.value, price.value, discount.value );

        title.value = '';
        price.value = '';
        discount.value = '';
    }

    const onChange = event => {
        search(event.target.value);
    }*/

    // const {products, discont_price} = useSelector
 //(state => state.products.filter(product => product.discont_price));