import React from 'react'

import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from './CartReducer';
import { checkboxClasses } from '@mui/material';

const CartState = ({ children }) => {
    
    
    const initialState = {
        cartItems: [],
        checkout: false,
    };

    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addToCart = (item) => {
        dispatch({type: 'ADD_TO_CART', item});
    };

    const increase = (item) => {
        dispatch({type: 'INCREASE', item});
    };

    const decrease = (item) => {
        dispatch({type: 'DECREASE', item});
    };

    const removeFromCart = (item) => {
        dispatch({type: 'REMOVE_ITEM', item});
    };

    const clearCart = () => {
        dispatch({type: 'CLEAR'});
    };

    const handleCheckout = () => {
        dispatch({type: 'CHECKOUT'});
    };

    const browse = () => {
        dispatch({type: 'BROWSE'});
    }


    return (
        //Add the functions that have been defined above into the Context provider, and pass on to the children
        <CartContext.Provider
          value={{
            showCart: state.showCart,
            cartItems: state.cartItems,
            addToCart,
            removeFromCart,
            increase,
            decrease,
            handleCheckout,
            clearCart,
            browse,
            ...state,
          }}
        >
          {children}
        </CartContext.Provider>
      );
    };

export default CartState
