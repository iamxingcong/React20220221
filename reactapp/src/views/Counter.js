import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../app/counterSlice'
import Detail from  './Detail'

import {
    Link,
    BrowserRouter,
    Route,
    Switch,
    StaticRouter,
    Redirect,
} from 'react-router-dom';


export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  function goto() {
    console.log("3232")
   
    
  }

  return (
    <div>
     <Detail />
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>


         <button
          aria-label="go to"
          onClick={ goto }
        >
          go to 

        </button>

         <Link to="/detail"> detail </Link>
      </div>
    </div>
  )
}

export default Counter