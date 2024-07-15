import React from 'react'

import {
    REMOVE_ITEM,
    ADD_TO_CART,
    INCREASE,
    DECREASE,
    CHECKOUT,
    CLEAR,
    BROWSE
} from './CartTypes.js';

import TotalItems from './TotalItems.jsx';

const CartReducer = (state,action) => {
    switch (action.type) {
        case ADD_TO_CART:
            if (!state.cartItems.find((item) => item.id===action.item.id)) {
                state.cartItems.push({
                    ...action.item,
                    quantity: 1,
                });
            }
            return {
                ...state,
                ...TotalItems(state.cartItems),
                cartItems:[...state.cartItems]
            };
        
        case REMOVE_ITEM:
            return {
                ...state,
                ...TotalItems(
                    state.cartItems.filter((item) => item.id !== action.item.id)
                ),
                cartItems: [...state.cartItems.filter((item) => item.id !== action.item.id)]
            };

        case INCREASE:
            state.cartItems[state.cartItems.findIndex((item)=> item.id===action.item.id)].quantity++;
            return {
                ...state,
                ...TotalItems(state.cartItems),
                cartItems: [...state.cartItems]
            };

        case DECREASE:
            state.cartItems[state.cartItems.findIndex((item)=> item.id===action.item.id)].quantity--;
            return {
                ...state,
                ...TotalItems(state.cartItems),
                cartItems: [...state.cartItems]
            };

        case CHECKOUT:
            return {
                cartItems: [],
                checkout: true,
                ...TotalItems([])
            };
        case CLEAR:
            return {
                cartItems: [],
                ...TotalItems([])
            };
        case BROWSE:
            return {
                cartItems: [],
                checkout: false,
                ...TotalItems([])
            }
        default:
            return state;
    }
};

export default CartReducer;
