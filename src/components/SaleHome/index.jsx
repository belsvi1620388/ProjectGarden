import React, {useRef} from 'react'
import { useSelector } from 'react-redux';
import ProductList from '../ProductList'
import s from './style.module.css'

export default function SaleHome() {

    const products = useSelector(
        ({products}) => {
           return products
           .filter(item => item.discont_price !== null)
           .slice(0,3);
          } 
      );
      const nav_links = useRef();
  return (
    <div className={s.item} ref={nav_links}>Sale
        
        <div className={s.block}>
    
      {
        products.map((item) => <ProductList key={item.id} {...item} />)
      }
      </div>
      
    </div>
  )
}
