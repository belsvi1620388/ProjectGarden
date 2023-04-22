import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import AllSale from '../../components/AllSale'
import ProductList from '../../components/ProductList'
import { resetSearchProductAction } from '../../store/reducer/productsReducer';
import s from './style.module.css'

export default function SalePage() {
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(resetSearchProductAction())
  }, []);

  return (
    <div className={s.item}>
      <AllSale />
      
    </div>
  )
}

/* {tmp.map(sale => <AllSale key={sale.id} {...sale}/>)}*/
