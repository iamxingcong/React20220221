import React from "react";

import {
    useSelector,
    useDispatch
} from 'react-redux'

import {
    decrement,
    increment
} from '../app/counterSlice'

export default function Detail() {



    const count = useSelector((state) => state.counter.value)
    const list = useSelector((state) => state.counter.list)
    
    return (

        <> 
            detail <span > {count} </span> 


             {list && list.length >= 1 ? (
                list.map((item) => {
                    
                      return  <h1 key={item.id}> {item.id} </h1>
                     
                })
             ) : ("--")}
        </>
    )


}