import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import ProductList from '../../components/ProductList';
import Products from '../../components/Products'
import s from './style.module.css'
import { resetSearchProductAction} from '../../store/reducer/productsReducer';

export default function ProductsPage() {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(resetSearchProductAction())
  }, []);
  

  const {catid} = useParams();

  const products = useSelector(
    ({products}) => {
      //console.log(products);
      if (catid  === undefined ){
        return products
      }else{
        return products.filter(item => item.categoryId === +catid)
      }
    }
  );
  
  return (
    
    <div className={s.item}>
      <Products />
      <div className={s.products}>
        {
        products
        .filter(({show}) => Object.values(show).every(item => item))
        .map(product => <ProductList key={product.id} {...product} />)
        }  
      </div>
    </div>
  )
}

/*
import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProductItem from '../../components/ProductItem';
import s from './style.module.css';


export default function ProductsPage() {

  const {category} = useParams();
  
    const products = useSelector(
      ({products}) => {
        if (category  === undefined ){
          return products
        }else{
          return products.filter(item => item.category === category)
        }
      }
    );
  

  return (
    
      <div className={s.product_container}>
        {
          products.map(product => <ProductItem key={product.id} {...product} />)
        }
    </div>
   
  )
}
*/


/*
const products = useSelector(
    ({products}) => {
      //console.log(products);
      if (category  === undefined ){
        return products
      }else{
        return products.filter(item => item.categoryId === category)
      }
    }
  );
  */

