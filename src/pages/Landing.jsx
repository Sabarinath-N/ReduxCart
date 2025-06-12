import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProductsThunk, nextPage, previousPage } from '../../redux/slices/productSlice'
import { addToWishlist } from '../../redux/slices/wishSlice'
import { addToCart } from '../../redux/slices/cartSlice'




function Landing() {

  const { products, loading, error, currentPage, productsPerPage } = useSelector((state) => state.productSlice)
  // console.log(products);


  const totalPage = Math.ceil(products.length/productsPerPage)
 
  const lastIndex = currentPage * 10
  const firstIndex = (currentPage - 1) * 10


  const handleNext = () => {
    if (currentPage < totalPage) {
      dispatch(nextPage())
    }
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      dispatch(previousPage())
    }
  }

  

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductsThunk())
  }, [])


  return (
    <>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 text-light fw-bolder">ReduxCart</h1>
            <p className="lead fw-normal text-white-50 ">Shop with style using ReduxCart</p>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5 ">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center ">


            {
              loading ?
                <h2>Loading</h2>
                :
                <>
                  {
                    error.length > 0 ?
                      <h2 className="text-center text-danger">{error}</h2>
                      :
                      <>
                        {

                          products.slice(firstIndex, lastIndex).map((item) => (
                            <div className="col mb-5 ">
                              <div className="card h-100 border border-2">
                                <Link to={`/det/${item.id}`}>
                                  {/* <!-- Product image--> */}
                                  <img className="card-img-top" src={item.thumbnail} alt="..." />
                                </Link>
                                {/* <!-- Product details--> */}

                                <div className="card-body p-4">
                                  <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">{item.title.length > 10 ? `${item.title.slice(0, 10)}...` : item.title.slice(0, 10)}</h5>
                                    {/* <!-- Product price--> */}
                                    {item.price}
                                  </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                  <div className="d-flex justify-content-between pb-4">
                                    <button className='btn' onClick={() => dispatch(addToCart(item))}>
                                      <i className="fa-solid fa-2xl  text-success  fa-cart-plus"></i>
                                    </button>
                                    <button className='btn' onClick={() => dispatch(addToWishlist(item))}>
                                      <i className="fa-solid fa-heart-circle-plus text-danger fa-2xl"></i>
                                    </button>
                                  </div>
                                  <div className="text-center">

                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                        }
                      </>
                  }

                </>

            }
          </div>
        </div>
      </section>
      <div className="d-flex justify-content-center my-5">
        <button className="btn" onClick={() => handlePrev()}>
          <i className="fa-solid fa-backward fa-xl  " ></i>
        </button>
        <span className='p-4'>{currentPage}/{totalPage}</span>
        <button className='btn' onClick={() => handleNext()}>
          <i className="fa-solid fa-forward fa-xl  " ></i>
        </button>
      </div>
    </>
  )
}

export default Landing
