import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import {decrementAction, incrementAction, resetAction } from './redux/action/counterAction';
export default function App() {
  const count=useSelector((state)=>state.count);
  const dispatch=useDispatch()
  function handleIncrment(){
   dispatch(incrementAction()) 
  }
  function handleDecrement(){
    dispatch(decrementAction()) 
   }
   function handleReset(){
    dispatch(resetAction()) 
   }
  return (
    <div className='App'>

      <h2>{count}</h2>
      <button onClick={handleIncrment}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleReset}>reset</button>
    </div>
  )
}
