import { ERROR_DATA, GET_DATA, initialState, SUCCESS_DATA } from "../states/fetchStates";


export const fetchReducer=(state=initialState,action)=>{
switch(action.type){
    case GET_DATA:
        return{
            ...state,
          loading:true,

        }
        case SUCCESS_DATA:
            return{
                loading:false,
                data:action.payload,
                error:null
              
            }
            case ERROR_DATA:
                return{
                    loading:false,
                    error:action.payload,
                    data:[]
                }
        default:
            return state;
}
}