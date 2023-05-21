import React, { useReducer } from 'react';


export const CartContext = React.createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, { ...action.payload, quantity: 1}];
            
        case 'REMOVE_FROM_CART':
            return state.filter((item) => item.id !== action.payload);

        case 'INCREASE_QUANTITY':
            return state.map((item) => 
                item.id === action.payload ? { ...item, quantity: item.quantity + 1} : item);

        case 'DECREASE_QUANTITY':
            return state.map((item) => 
                item.id === action.payload ? { ...item, quantity: item.quantity - 1} : item);
        case 'CLEAR_CART':
            return [];
        default:
            return state;
    }
};  

export const CartProvider = ({ children}) => {
    const [cart, dispatch] = useReducer(cartReducer, []);

    return (
        <CartContext.Provider value={{cart, dispatch}}>
            {children}
        </CartContext.Provider>
    );
};