import React, { useEffect } from 'react'
import { getProduct } from '../redux/AuthReducer/action'

import { useDispatch } from 'react-redux'

export const Product = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        getProduct((dispatch))
    }, [])

    return (
        <div>


        </div>
    )
}
