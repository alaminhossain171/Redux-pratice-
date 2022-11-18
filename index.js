const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");


// =================>>> constains <<<========================
const ADD_PRODUCT = 'ADD_PRODUCT';
const GET_PRODUCT = 'GET_PRODUCT';



// =================>>> actions <<<========================
const initialState = {
    count: 2,
    product: ['pen', 'watch']
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

//store (getState, dispatch, subscripe)

const store = createStore(productReducer,applyMiddleware(logger));


store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(addProductAction('book'));
