const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");
const { default: thunk } = require("redux-thunk");


const API='https://jsonplaceholder.typicode.com/todos';


// =================>>> constains <<<========================

const GET_TODOS = 'GET_TODOS';
const SUCCESS = 'SUCCESS';
const FAILED='FAILED'

//state
const initialState={
    data:[],
    loading:false,
    error:null,
}

// =================>>> actions <<<========================
const getTodoAction=()=>{
    return{
        type:GET_TODOS
    }
}
const successTodoAction=(data)=>{
    return{
        type:SUCCESS,
        payload:data
    }
}
const faildTodoAction=(errMsg)=>{
    return{
        type:FAILED,
        payload:errMsg
    }  
}


// =================>>> reducer <<<========================

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS:
           return{
            ...state,
            loading:true
           }

        case SUCCESS:
            return {
                ...state,
                data: action.payload,
               loading:false
            }
            case FAILED: 
             return {
                ...state,
            loading:false,
             error:action.payload
            }
            default:
                return state
    }
}

const fetchData=()=>{

return (dispatch)=>{
dispatch(getTodoAction());

    fetch(API)
    .then((response) =>response.json())
    .then((jsonResponse) => {
    const title=jsonResponse.map((item)=>item.title);
   dispatch(successTodoAction(title))

 
    }).catch((error) => {
      // Handle the error
     dispatch(faildTodoAction(error.message))
    });
}


   
}




//store (getState, dispatch, subscripe)

const store = createStore(todoReducer,applyMiddleware(thunk));


store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(fetchData());
