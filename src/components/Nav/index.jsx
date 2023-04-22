import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import {useSelector} from 'react-redux'
import s from './style.module.css'
import logo from '../Nav/logo.png'
import icons_basket from '../Nav/icons_basket.png'



export default function Nav() {

    const checkClass = ({isActive}) => isActive ? s.active : '';

    const catalog = useSelector(state => state.catalog);

    const nav_links = useRef();
    const navBtnOnClick = () => {
     const links = nav_links.current;
     links.classList.toggle(s.links_show);
    }
    

  return (
    
    <div className={s.nav}>
      <div className={s.links} ref={nav_links}>
      <NavLink className={checkClass} to='/'>
          <img src={logo} alt="logo" />
        </NavLink>
      
        <NavLink className={checkClass}  to='/categories/'>
          <button onClick={catalog} className={s.button} >Catalog</button>
        </NavLink>
        
        <NavLink className={checkClass} to="/">Main Page</NavLink>
        <NavLink className={checkClass} to="/products">All product</NavLink>
        <NavLink className={checkClass} to="/sale">All sale</NavLink>
        
        <NavLink className={checkClass}  to="/basket">
          <img src={icons_basket} alt="basket" />
        </NavLink>
        </div>
        <button onClick={navBtnOnClick} className={s.nav_btn}>=</button>
    </div>
    
    
  )
}

// <NavLink className={checkClass} to="/img"></NavLink>
/*
{  catalog.map(catalog => <Catalog key={catalog.id} {...catalog}/>)
        }
*/
//<img src={icons_basket} alt="basket" />