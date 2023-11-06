import { addProductCart, deteleProductCart, updateQuantityProductCart } from "./itemsActions";

export const itemsReducer = (state = [], action) => {
    switch (action.type) {
        case addProductCart:
            return [
                ...state,
                {
                    product: action.payload,
                    quantity: 1
                }
            ];

        case updateQuantityProductCart:
            return state.map((i) => {
                if (i.product.id === action.payload.id) {
                    return {
                        ...i,
                        quantity: i.quantity + 1
                    }
                }
                return i;
            });

        case deteleProductCart:
            return state.filter((i) => i.product.id !== action.payload);

        default:
            return state;
    }
}