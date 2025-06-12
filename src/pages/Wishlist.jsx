import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removefromWishlist } from '../../redux/slices/wishSlice';
import { addToCart } from '../../redux/slices/cartSlice';




function Wishlist() {

  const { wishlist } = useSelector((state) => state.wishSlice)
  // console.log(wishlist);

  const dispatch=useDispatch()

  const addtocartHandler=(product)=>{
    dispatch(addToCart(product))
    dispatch(removefromWishlist(product.id))
  }



  return (
    <>

      <div className="container-fluid">
        <h1 className="my-3">Wishlist</h1>
      </div>


      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5 ">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center ">


            {
              wishlist.length > 0 ?
                <>
                  {
                    wishlist.map(item => (
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
                              <h5 className="fw-bolder">{item.title}</h5>
                              {/* <!-- Product price--> */}
                              $ {item.price}
                            </div>
                          </div>

                          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="d-flex justify-content-between pb-4">
                              <button className='btn' onClick={()=>addtocartHandler(item)}>
                                <i className="fa-solid fa-2xl  text-success  fa-cart-plus"></i>
                              </button>
                              <button className='btn' onClick={()=>dispatch(removefromWishlist(item.id))}>
                                <i className="fa-solid fa-heart-circle-minus text-danger fa-2xl"></i>
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
                : <h2>No Items Added TO Wishlist</h2>
            }

          </div>
        </div>
      </section>
    </>
  )
}

export default Wishlist
