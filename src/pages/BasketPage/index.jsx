import React from 'react'
import BasketItem from '../../components/BasketItem'
import { useSelector } from 'react-redux';
import Basket from '../../components/Basket';
import s from './style.module.css'

export default function BasketPage() {
  //const basket = useSelector(({basket}) => basket);
  const {basket, products} = useSelector((state) => state);
  
  const data = basket.map(item => {
    const product = products.find(({id}) => id === item.id);
    return {...item, ...product}
  })
  return (
    <div className={s.container}>
      <Basket />
      <div>
      {
        data.map((item) => <BasketItem key={item.id} {...item} />)
      }
      </div>
    </div>
  )
}
