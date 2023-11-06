import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import { addProductCart, deteleProductCart, updateQuantityProductCart } from "../reducer/itemsActions";


const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

export const useItemsCart = () => {
    const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const handlerAddProductCart = (product) => {

        const hasItem = cartItems.find((i) => i.product.id === product.id);
        if (hasItem) {
            dispatch({
                type: updateQuantityProductCart,
                payload: product
            });
        } else {

            dispatch({
                type: addProductCart,
                payload: product
            });
        }

    }

    const handlerDeleteProductCart = (id) => {
        dispatch({
            type: deteleProductCart,
            payload: id
        });
    }

    return {
        cartItems,
        handlerAddProductCart,
        handlerDeleteProductCart
    }
}