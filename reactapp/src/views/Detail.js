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
    
    return (

        <> 
            detail <span > {count} </span> 
        </>
    )


}