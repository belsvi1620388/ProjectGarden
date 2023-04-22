const PRODUCTS_LOAD = 'PRODUCTS_LOAD';
const PRODUCTS_PRICE_FILTER = 'PRODUCTS_PRICE_FILTER';
const PRODUCTS_SEARCH_RESET = 'PRODUCTS_SEARCH_RESET';//delete
const PRODUCTS_SEARCH = 'PRODUCTS_SEARCH';//delete
const PRODUCTS_SORT = 'PRODUCTS_SORT';
const PRODUCTS_CHECKBOX = 'PRODUCTS_CHECKBOX';


export const loadProductsAction = (payload) => ({type: PRODUCTS_LOAD, payload});
export const productsPriceFilterAction = (payload) => ({type: PRODUCTS_PRICE_FILTER, payload});
export const resetSearchProductAction = () => ({type: PRODUCTS_SEARCH_RESET});
export const searchProductAction = (payload) => ({type: PRODUCTS_SEARCH, payload});
export const sortProductAction = (payload) => ({type: PRODUCTS_SORT, payload});
export const productsCheckboxAction = (payload) => ({type: PRODUCTS_CHECKBOX, payload});


export const productsReducer = (state=[], action) => {
  if (action.type === PRODUCTS_LOAD){
    return action.payload.map(item => ({...item,  show: {price: true, discount: true}}))
}else if (action.type === PRODUCTS_SEARCH){
    return state.map(item => {
    item.show.search = item.title.startsWith(action.payload)
    return item
    })
}else if (action.type === PRODUCTS_SEARCH_RESET){
    return state.map(item => {
    item.show.search = true;
    return item
    })
}else if (action.type === PRODUCTS_SORT){
    if (+action.payload === 1){
        state.sort((a, b) => a.price - b.price);
    }else{
        state.sort((a, b) => b.price - a.price);
    }
    return [...state]
}else if (action.type === PRODUCTS_PRICE_FILTER){
    const {min, max} = action.payload;
    return state.map(elem => {
        elem.show.price = elem.price >= min && elem.price <= max;
        return elem
    })
}else if (action.type === PRODUCTS_CHECKBOX){
  return state.map(elem => {
    elem.show.discount = elem.discont_price !== null || !action.payload;
    return elem
  })
}
  return state
}
/*
    if (action.type === PRODUCTS_LOAD){
    return action.payload.products.map(item => ({...item,  show: {price: true, discount: true}}))
}else if (action.type === PRODUCTS_PRICE_FILTER){
  const {min, max} = action.payload;
  return state.map(elem => {elem.show.price = elem.price >= min && elem.price <= max;
  return elem
})
 // return newState;
}else if (action.type === PRODUCTS_SEARCH){
  return state.map(item => {
  item.show.discount = item.discont_price !== null || !action.payload;
  return item
  })
}
  return state
}
  */
    

// добавить новое свойство для каждоо продукта со значением скидки

/*
  if (action.type === PRODUCTS_LOAD){
        return action.payload
    
    }
      return state
    }
*/