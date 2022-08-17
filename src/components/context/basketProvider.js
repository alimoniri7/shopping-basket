import React, { createContext, useReducer } from 'react';

let initialBasket = {
    space : [],
    totalPrice : 0,
    totalSelected : 0,
    checkout : false,    
}

const basketReduser = (basket , action) => {
    console.log(basket);
    switch(action.type) {
        case 'ADD_ITEM' : 
        if(!basket.space.find(item => item.id === action.payload.id)){
            basket.space.push({
                ...action.payload,
                count : 1
            })
            return {
                ...basket,
                // space : [...basket.space],
                totalSelected : basket.totalSelected+1,
                totalPrice : basket.totalPrice + action.payload.price
            }
        }
        break

        case 'DELETE_ITEM' :
            let newItems = basket.space.filter(item => item.id !== action.payload.id)
            return{
                ...basket,
                space : [...newItems],
                totalSelected : basket.totalSelected-1,
                totalPrice : basket.totalPrice - action.payload.price
            }

        case 'INCREASE' :
            let indexI = basket.space.findIndex(item => item.id === action.payload.id)
            basket.space[indexI].count++
            return {
                ...basket,
                totalSelected : basket.totalSelected+1,
                totalPrice : basket.totalPrice + action.payload.price
            }

        case 'DECREASE' : 
            let indexD = basket.space.findIndex(item => item.id === action.payload.id)
            basket.space[indexD].count--
            return {
                ...basket,
                totalSelected : basket.totalSelected-1,
                totalPrice : basket.totalPrice - action.payload.price
            }
        
        case 'CHECKOUT' : 
            return{
                space : [],
                totalPrice : 0,
                totalSelected : 0,
                checkout : true,    
            }
        
        case 'CLEAR' : 
            return {
                space : [],
                totalPrice : 0,
                totalSelected : 0,
                checkout : false,    
            }
        
        default : 
        return{
            ...basket
        }
            
    }
}

export let Basket = createContext()


const BasketProvider = ({children}) => {

    const [basket , dispatch] = useReducer(basketReduser , initialBasket)

    return (
        <Basket.Provider value={{basket : basket , dispatch : dispatch}}>
            {children}
        </Basket.Provider>
    );
};

export default BasketProvider;

