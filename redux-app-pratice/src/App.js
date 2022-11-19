/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAction } from './redux/action/fetchAction';

function App() {
  const {data,loading, error}=useSelector((state)=>state);
 const dispatch=useDispatch()
useEffect(()=>{
  dispatch(fetchAction())

},[])

  return (
    <div>
      {loading&&<span>loading....</span>}
      {error&&<span>error</span>}
      {data && data.map((item)=>{
        return <article key={item.id}>
          <h1>{item.id}</h1>
          <h3>{item.title}</h3>
        </article>
      })}
    </div>
  )
}

export default App