const cart = [];

const handelCart = (state = cart, action) => {
    const product = action.payload;

    switch(action.type) {
        case "ADDITEM":
            // Check if the product already exists
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                );
            } else {
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ];
            }

        case "DELITEM":
            // Check if product exists
            const exist1 = state.find((x) => x.id === product.id);
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id);
            } else {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x
                );
            }

        default:
            // Return the current state or the initial state if undefined
            return state;
    }
};

export default handelCart;