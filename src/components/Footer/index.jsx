import React from 'react'
import s from '../Footer/style.module.css'
//import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//import { faInstagram} from '@fortawesome/free-brans-svg-icons';
//import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className={s.container}>
    <div className={s.block}>
        <div className={s.wrapper}>
            <p>Contact</p>
        </div>
        <div className={s.phone}>
            <p>+49 999 999 99 99</p>
        </div>
        <div className={s.address}>
            <p>Address</p>
        </div>
        <div className={s.street}>
            <a href="https://www.google.com/search?q=telranDE">Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</a>
        </div>
        
        
    </div>
    
    <iframe 
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d35815.80676208184!2d17.112464782973387!3d48.1483085132309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2ssk!4v1678628039661!5m2!1sru!2ssk" 
    width={1345} height={525} 
    ></iframe>
    </footer>
  )
}
