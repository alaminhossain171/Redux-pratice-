import { DECREMENT, INCREMENT, initialState, RESET } from "../states/counter";

export const counterReducer=(state=initialState,action)=>{
switch(action.type){
    case INCREMENT:
        return{
            ...state,
            count:state.count+1
        }
        case DECREMENT:
            return{
                ...state,
                count:state.count-1
            }
            case RESET:
                return{
                    ...state,
                    count:0
                }
        default:
            return state;
}
}