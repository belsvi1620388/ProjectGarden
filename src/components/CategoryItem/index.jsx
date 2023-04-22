import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom';

export default function CategoriesItem({id, image, title}) {

  const link = `/categories/${title}/${id}`;
  const picture = `http://localhost:3333/${image}`;
  
  return (
    
      <Link to={link} >
        <div className={s.item}>
        <img src={picture} alt={title} />
        <p>{title}</p>
        </div>
      </Link>
    
  )
}
