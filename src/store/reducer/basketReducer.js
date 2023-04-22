const BASKET_INCREMENT = 'BASKET_INCREMENT';
const BASKET_DECREMENT = 'BASKET_DECREMENT';
const BASKET_ADD = 'BASKET_ADD';
const BASKET_DELETE_PRODUCT = 'BASKET_DELETE_PRODUCT';

export const basketIncrementAction = (payload) => ({type: BASKET_INCREMENT, payload });
export const basketDecrementAction = (payload) => ({type: BASKET_DECREMENT, payload });
export const basketAddAction = (payload) => ({type: BASKET_ADD, payload });
export const basketDeleteAction = (payload) => ({type: BASKET_DELETE_PRODUCT, payload });

const defaultState = [
    {id: 1, count: 4},
    {id: 2, count: 32},
    {id: 3, count: 22},
    {id: 4, count: 14}
]

export const basketReducer = (state = defaultState, action) => {
    if (action.type === BASKET_INCREMENT ){
        const product = state.find(({id}) => action.payload === id);
        product.count++;
        return [...state]
    }else if (action.type === BASKET_DECREMENT){
        const product = state.find(({id}) => action.payload === id);
        // это процесс удаления карточки при нуле из корзины
        if (product.count === 1){
            return state.filter(item => item !== product);
        }
        product.count--;
        return [...state]
    }else if (action.type === BASKET_ADD){
        const product = state.find(({id}) => action.payload === id);
        if (product === undefined){
         return [...state, {id: action.payload, count: 1}];
         }else {
             product.count++;
             return [...state]
            }
        }else if (action.type === BASKET_DELETE_PRODUCT){
            return []
        }
    
        return state
    }
/*
export const basketReducer = (state= [], action) => {
    if (action.type === 'BASKET_ADD'){
        const target = state.find(({id}) => id === action.payload);
        if (target === undefined){
            return [...state, {id: action.payload, count: 1}]
        }else{
            target.count++;
            return [...state]
        }
    }else if (action.type === 'BASKET_INCREMENT'){
        const target = state.find(({id}) => id === action.payload);
        target.count++;
    }else if (action.type === 'BASKET_DECREMENT'){
        const target = state.find(({id}) => id === action.payload);
        if(target.count ===1){
           return state.filter(item => item !== target)
        }else{
            target.count--;
            return [...state]
        }
    }else if(action.type === 'BASKET_DELETE_PRODUCT'){
        return state.filter(({id}) => id !== action.payload);

    }
    return state
}
*/