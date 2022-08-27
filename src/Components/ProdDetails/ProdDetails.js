import React, { useState } from 'react'
import "./ProdDetails.css"
import ApiStore from '../ApiStore/ApiStore'
import { useLocation } from "react-router-dom"

const ProdDetails = () => {

    let location = useLocation();
    const [productDetail, setProdDetail] = useState(location.state.data)



    return (
        <>
            <div>
                <div className='box' >

                    <div className='content'>
                        <h2>Product Details</h2>
                        <p>name:{productDetail.name}</p>
                        <p>Description:{productDetail.desc}</p>
                        <p>Category:{productDetail.category}</p>
                        <p>Price:{productDetail.price}</p>
                    </div>

                </div>
            </div>

        </>
    )
}

export default ProdDetails