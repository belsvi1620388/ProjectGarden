import React, {useRef} from 'react'
import { Link } from 'react-router-dom';
import image from '../AddHome/image2.png'
import s from '../AddHome/style.module.css'

export default function AddHome() {

  const link = '/sale/';
  
  const nav_links = useRef();
  return (
    
    <div className={s.container} ref={nav_links}>
            <h1>Sale</h1>
            <h2>New Season</h2>
            <Link to={link}>
            <button >Sale</button>
            </Link>
            <img src={image} alt="image" /> 
    </div>
    
  )
}

/*
{  catalog.map(catalog => <Catalog key={catalog.id} {...catalog}/>)
        }
*/
/*
<button onClick="document.location='/products/all.html'" >Sale</button>
*/