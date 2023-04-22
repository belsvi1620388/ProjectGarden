import { loadCategoriesAction } from "../reducer/categoryReducer";

export const loadCategories = async (dispatch) => {
   // console.log('hello')
    
    const link = 'http://localhost:3333/categories/all';
    //const link = 'http://localhost:3333/products/categories/all';

    const resp = await fetch(link);
    const data = await resp.json();
    dispatch(loadCategoriesAction(data));
}
/*

    const link ='https://fakestoreapi.com/categories';

    'http://localhost:3333//categories/all'
    
}
*/