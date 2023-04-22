import React, { useRef} from 'react';
import s from '../Catalog/style.module.css';
import { Link } from 'react-router-dom'; 
import { useSelector } from 'react-redux';
import CategoryItem from '../CategoryItem';

export default function Catalog() {

  const categories = useSelector(state => state.category);

  const nav_links = useRef();

  const link = '/categories/';

  
  
  return (
    
    <div className={s.container}>
      <div className={s.catalogDiv}>
        <div className={s.title}>Catalog</div>
        <Link to={link}>All categories</Link>
      </div>

     
      <div className={s.item} ref={nav_links}>
      {
          categories
          .map(item => <CategoryItem key={item} {...item}/>)
          .slice(0,4)
        }
        </div>
        
    </div>
  )
}

/*
{
          categories
          .map(item => <CategoryItem key={item} title={item}/>)
          .slice(0,4)
        }
        */




/* <button>All categories</button>
*/

/*
<div className={s.cardCatalog}>
        <div className={s.productCategory}>

          <div className={s.fertilizer}>
          <img src={one} alt="Fertilizer" />
          <p>Fertilizer</p>
      </div>
      
      <div className={s.protective}>
        <img src={two} alt="two" />
        <p>Protective products and septic tanks</p>
      </div>

      <div className={s.plathing}>
        <img src={three} alt="Planting material	" />
        <p>Planting material	</p>
      </div>

      <div className={s.tools}>
        <img src={four} alt="Tools and Inventory" />
        <p>Tools and Inventory</p>
        </div>
      </div>
      </div>
      */