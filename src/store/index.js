import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import { basketReducer } from "./reducer/basketReducer";
import { productsReducer} from "./reducer/productsReducer";
import { categoryReducer} from "./reducer/categoryReducer";



const rootReducer = combineReducers({
    basket: basketReducer,
    products: productsReducer,
    //categories: categoriesReducer
    category: categoryReducer,
    
})

export const store = createStore(rootReducer, applyMiddleware(thunk));


