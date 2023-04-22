import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { productsCheckboxAction, productsPriceFilterAction, sortProductAction} from '../../store/reducer/productsReducer';

import s from './style.module.css'


export default function Products() {
 
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

    const onChangeSearch = event => {
        const value = event.target.checked;
        dispatch(productsCheckboxAction(value))
    }

    const onChangeOrder = event => {
      const value = event.target.value;
      dispatch(sortProductAction(value))
  }

  useEffect(()=>{
    dispatch(productsPriceFilterAction(price));
  }, [price])
    

    return (
      <div className={s.item}>
        <div className={s.allProducts}>All Products</div>
          <div className={s.formBlock}>
            <form className={s.form}>
              <p className={s.price}>Price</p>
              <input type="number" placeholder='from' onChange={setMinPrice} />
              <input type="number" placeholder='to' onChange={setMaxPrice}  />
              <p className={s.discounted_paragraf}>Discounted items</p>
              <input onChange={onChangeSearch}  className={s.discounted} type="checkbox" name='Discounted' id='Discounted' />
              
              <p className={s.sorted_paragraf}>Sorted</p>
              <select onChange={onChangeOrder}  list="sorted" type='text' placeholder='by default'>
                <option value='price' >price</option>
                <option value='discount' >discount</option>
              </select>
              
            </form>
          </div>
      </div>
  )
}
// onChange={onChangeSearch}

  // <input onChange={onChangeSearch} list="sorted" name='by default' placeholder='by default' />
// <button onClick={()=>dispatch({type: 'BASKET_ADD', payload: id})}>ADD</button>

/*
<div className={s.item}>
        <div className={s.itemDiv}>
          <div className={s.allProducts}>All Products</div>
        </div>
        <div className={s.productsDiv}>
          <div className={s.products}>
            <img src={one} alt="" />
            <p>{price}$</p>
            <p>{discount}$</p>
            <p>{title}</p>
          </div>
        </div>
      </div>
*/

/* Lesson32 Product
import React from 'react'
import s from './style.module.css';
import {useDispatch} from 'react-redux';

export default function Product({id, title, price, discount}) {
  const dispatch = useDispatch();
    return (
    <div className={s.item}>
      <p>{title}</p>
      <p>{price}</p>
      <p>{discount}</p>
      <button onClick={()=>dispatch({type: 'PRODUCTS_DELETE', payload: id})}>Delete</button>
      <button onClick={()=>dispatch({type: 'BASKET_ADD', payload: id})}>ADD</button>

      
    </div>
  )
}

*/
/* Lesson32 ProductList
import React from 'react'
import {useSelector} from 'react-redux'
import Product from '../Product'
import s from './style.module.css'


export default function ProductList() {

    const products = useSelector(state => state.products);

  return (
    <div className={s.container}>
        {
          products.map(product => <Product key={product.id} {...product}/>)
        }
    </div>
  )
}




/*
const SearchForm = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
  }
  const TitleChange = event => {
   setTitle = event.target.value;
}
const PriceChange = event => {
  setPrice = event.target.value;
}
const DiscountChange = event => {
  setDiscount = event.target.value;
}
const handleSubmit = event => {
  event.preventDefault();
  onSearch(title, price, discount);
}
*/

/*
const ProductList = () => { const products = useSelector((state) => state.products);
    const [searchParams, setSearchParams] = useState({
      title: '',
      price: '',
      discount: '',
    })};
  
    const filterProducts = (products, searchParams) => {
      return products.filter((product) => {
      return (
        product.title.toLowerCase().includes(searchParams.title.toLowerCase()) && 
        product.price <= searchParams.price &&
        product.discount >= searchParams.discount);
    });
    }
    */



    /*
    const [title, setTitle] =  useState('');
  const [discount, setDiscount] =  useState('');
  const handleTitleChange = (event) => {setTitle(event.target.value)};
  const handleDiscountChange = (event) => {setDiscount(event.target.value)};
  const handlePriceChange = (event) => {setPrice(event.target.value)};
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(title, discount, price);
  }
  */

  /*const handleSubmit = e => {
      e.preventDefault();
      dispatch(productsPriceFilterAction(price, discount));
    }*/
    
/*
    const onChangeSearch = event => {
      const value = event.target.value;
      dispatch(productsPriceFilterAction(value))
  }
  /*
    const onChangeSearch = event => {
      const value = event.target.value;
      dispatch(productsPriceFilterAction(value))
  } 
    */

 /*   const dispatch = useDispatch();
    const onChange = event => {
        const value = event.target.value;
        dispatch(productsPriceFilterAction(value)
    }
// тут
   const onChangeSearch = event => {
      const value = event.target.value;
      dispatch((value))
  }*/