import React from 'react'
import AddHome from '../../components/AddHome'
import Catalog from '../../components/Catalog'
import CategoryItem from '../../components/CategoryItem'
import Footer from '../../components/Footer'
import FormHome from '../../components/FormHome'
import SaleHome from '../../components/SaleHome'


export default function HomePage()  {
  
  return (
    <div>
        <AddHome />
        <Catalog />
        <FormHome />
        <SaleHome />
        <Footer />
    </div>
  )
}

