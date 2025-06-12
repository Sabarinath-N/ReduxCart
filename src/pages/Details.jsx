import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'



function Details() {


    const [product, setProduct] = useState({})
    // const { products } = useSelector((state) => state.productSlice)

    const { id } = useParams()
    // console.log(id);
    

    useEffect(() => {
        getProduct()
    },[])
    // console.log(product);

    const getProduct=()=>{
        const products = JSON.parse(sessionStorage.getItem("apiData"))
        const res = products.find(item => item.id == id)
        setProduct(res)
    }
    


    return (

        
        <>
            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={product?.thumbnail} alt="..." /></div>
                        <div className="col-md-6">
                            <div className="small mb-1"> <i className="fa-solid fa-star " style={{color: "#FFD43B"}} ></i> {product?.rating}</div>
                            <h1 className="display-5 fw-bolder">{product?.title}</h1>
                            <div className="fs-5 mb-5">
                                {/* <span className="text-decoration-line-through"></span> */}
                                <span>$ {product?.price}</span>
                            </div>
                            <p className="lead" >{product?.description}</p>
                            <div className="d-flex justify-content-start">
                                <button className='btn'>
                                <i className="fa-solid fa-2xl  text-success  fa-cart-plus"></i>
                              </button>
                              <button className='btn'>
                                <i className="fa-solid fa-heart-circle-plus text-danger fa-2xl"></i>
                              </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Details
