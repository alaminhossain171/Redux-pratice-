const { createStore, combineReducers } = require("redux");


// =================>>> constains <<<========================
const ADD_PRODUCT = 'ADD_PRODUCT';
const GET_PRODUCT = 'GET_PRODUCT';

const ADD_CART='ADD_CART'
const GET_CHART = 'GET_CHART';


// =================>>> states <<<========================
const initialState = {
    count: 2,
    product: ['pen', 'watch']
}
const initialCartState = {
    count: 1,
    cart: ['Meat']
}
// =================>>> actions <<<========================
const addProductAction = (productName) => {
    return {
        type: ADD_PRODUCT,
        payload: productName
    }
}

const getProductAction = () => {
    return {
        type: GET_PRODUCT,

    }
}



const addCartAction = (cartName) => {
    return {
        type: ADD_CART,
        payload: cartName
    }
}

const getCartAction = () => {
    return {
        type: GET_CHART,

    }
}


// =================>>> reducer <<<========================

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return { ...state };

        case ADD_PRODUCT:
            return {
                count: state.count + 1,
                product: [...state.product, action.payload]
            }
            default:
                return state
    }
}


const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CHART:
            return { ...state };

        case ADD_CART:
            return {
                count: state.count + 1,
                cart: [...state.cart, action.payload]
            }
            default:
                return state
    }
}


//=================>>>store (getState, dispatch, subscripe)<<<=====================


//combine reducers
const rootReducer=combineReducers({
    productReducer,
    cartReducer
})

const store = createStore(rootReducer);


store.subscribe(() => {
    console.log('===>',store.getState());
})


store.dispatch(addProductAction('mobile'));
store.dispatch(getProductAction());
store.dispatch(addCartAction('fish'));
store.dispatch(getCartAction());
