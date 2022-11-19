import axios from "axios";
import { ERROR_DATA, GET_DATA, SUCCESS_DATA } from "../states/fetchStates"

export const fetchAction=()=>async(dispatch)=>{
    dispatch({type:GET_DATA});
  try{
 
    const res= await axios.get('https://jsonplaceholder.typicode.com/todos');
   dispatch({
type:SUCCESS_DATA,
payload:res.data
   });
  }  
  catch(error){
    dispatch(
        {
            type: ERROR_DATA,
            payload:error.message
        }
    )
  }
}