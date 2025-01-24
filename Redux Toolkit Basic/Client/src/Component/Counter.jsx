import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decrement, increment } from '../Features/CounterSlice';
const Counter = () => {


    const dispatch = useDispatch();
    const count = useSelector((state)=>state.counter.value);
  return (
   <>
   <h1 style={{textAlign:'center'}}>Count Is {count}</h1>

   <div style={{marginInline:'auto'}}>

    <button onClick={()=>dispatch(increment())} > Increment</button>
    <button onClick={()=>dispatch(decrement())}> Decrement</button>
   </div>
   
   </>
  )
}

export default Counter