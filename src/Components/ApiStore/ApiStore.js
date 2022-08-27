import React, { useState, useEffect } from 'react'
import "./ApiStore.css"
import { Routes, Route, useNavigate } from "react-router-dom";

const ApiStore = () => {
    const navigate = useNavigate();
    const details = (productDetail) => {
        console.log("test")
        navigate("/ProdDetails", {
            state: {
                data: productDetail
            }
        });
    };
    const [show, setShow] = useState([]);
    useEffect(() => {
        fakestore();
    }, [])
    const fakestore = async () => {
        const response = await fetch("http://localhost:5000/prodapi/showproduct")
        const jsonData = await response.json();

        console.log(jsonData.response);
        setShow(jsonData.response);
    }
    // fakestore();
    const [search, setSearch] = useState('')

    return (
        <>

            <div>
                <input type="text" placeholder='search' className='search-products' onChange={(e) => { setSearch(e.target.value) }} />
            </div>
            <div className='main-div'>

                {show.filter(values => {
                    if (search == "") {
                        return values
                    }
                    else if (values.name.toLowerCase().includes(search.toLowerCase())) {
                        return values
                    }
                }).map((vlaues) => {
                    return (
                        <>
                            <div className='box' >

                                <div className='content'>
                                    <h5>{vlaues.name}</h5>
                                    <p>{vlaues.desc}</p>
                                    <p>{vlaues.category}</p>
                                    <p>{vlaues.price}</p>
                                    <button onClick={() => {
                                        details(vlaues)
                                    }}>details</button>
                                </div>

                            </div>
                        </>
                    )
                })}

            </div>
        </>
    )
}

export default ApiStore