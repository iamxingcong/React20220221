
import React from 'react'
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import { listdt, decrement, increment } from '../app/counterSlice'
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
  const list = useSelector((state) => state.counter.list)
  const dispatch = useDispatch()

  async function goto() {
         
   
        const urlsx = "http://localhost/wordpress/index.php/wp-json/wp/v2/posts";

        var that = this
        await axios.get(urlsx)
            .then(function(response) {
                
                if (response.data) {
                    
                   dispatch(listdt(response.data))

                }



            })
            .catch(function(error) {
                console.log(error);
            })


    
  }

  return (
    <div>
     <Detail />
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment(6))}
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
         <Link to="/postlist"> post list  </Link>

        
         
      </div>
    </div>
  )
}

export default Counter