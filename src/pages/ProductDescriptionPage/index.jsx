import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux';
import s from './style.module.css'
import { basketAddAction } from '../../store/reducer/basketReducer';

export default function ProductDescriptionPage() {
    const {id} = useParams();
    
    const products = useSelector(({products}) => products);
  
    const dispatch = useDispatch();
    
    const render = () => {
      if (products.length === 0){
        return <p>Data is being loaded</p>
      }else{
        const  {image, price, discont_price, title, description} =
         products.find(item => item.id === +id);

         const saleProduct = 100 - Math.round(price / discont_price * 100);

        const picture = `http://localhost:3333/${image}`;
        
        return (
        <>
          <p className={s.spade}>Spade</p> 
            <img src={picture} alt={title} />
          <div className={s.price}>
            <div className={s.priceBlock}>
            <p>{price}$</p>
            <p>{discont_price}$</p>
            <p className={s.discount}>{saleProduct}%</p>
            </div>
            <button onClick={()=>dispatch(basketAddAction(+id))}>To cart</button>
            <p>Description</p>
            <p>{description}</p>
          </div>
            
        </>
        )
      }
    }
  return (
    <div className={s.container}>
        {render()}
        
    </div>
  )
}
 
/*

        return (
                <>
                  <img src={thumbnail} alt={title} />
                  <div className={s.info}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <div className={s.price}>
                      <p>Price: {price}</p>
                      <button onClick={()=>dispatch(basketAddAction(id))}>Добавить в корзину</button>
                  </div>
                  </div>
                  </>
        )
      }
    }

*/

// my project
/*
<>
          <div className={s.spade}>Spade</div> 
          <div className={s.info}>
            <div className={s.img}>
            <img src={picture} alt={title} />
            </div>
          
          <div className={s.price}>
            <p>{price}$</p>
            <button onClick={()=>dispatch(basketAddAction(+id))}>To cart</button>
            <p>Description</p>
            <p>{description}</p>
            </div>
            </div>
        </>
        */