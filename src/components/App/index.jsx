import { Route, Routes} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { loadProducts } from "../../store/asyncActions/loadProducts";
import { loadCategories } from "../../store/asyncActions/loadCategories";

import HomePage from "../../pages/HomePage";
import CategoryPage from "../../pages/CategoryPage";
import ProductDescriptionPage from "../../pages/ProductDescriptionPage";
import ProductsPage from "../../pages/ProductsPage";
import SalePage from "../../pages/SalePage";
import BasketPage from "../../pages/BasketPage";
import NotFound from "../../pages/NotFound";

import Nav from "../Nav";
import Footer from "../Footer";
import './index.css';

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(loadProducts);
    dispatch(loadCategories);

  }, [])

  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        
        <Route path='/categories/' element={<CategoryPage/>}/>

        <Route path='/categories/:cattitle/:catid' element={<ProductsPage/>}/>
        
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path="/products/:category" element={<ProductsPage />} />
        
        <Route path="/product/:id" element={<ProductDescriptionPage />} />

        <Route path='/sale' element={<SalePage/>}/>

        <Route path="/basket" element={<BasketPage />} />
        
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
