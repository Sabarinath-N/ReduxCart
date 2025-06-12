import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { checkOut, decrementQuantity, incrementQuantity, removeFromCart } from '../../redux/slices/cartSlice';


function Cart() {

  const { cart } = useSelector((state) => state.cartSlice)
  console.log(cart);

  const dispatch=useDispatch()

  return (
    <>
      <div className="container-fluid" style={{ minHeight: '70vh' }}>
        <div className="row">
          <div className="col-9">
            <h1 className="mb-3">Cart Summary</h1>

            {
              cart.length > 0 ?
                <><table className="table table-info">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Title</th>
                      <th>Image</th>
                      <th>Unit Price</th>
                      <th>Quantity</th>
                      <th>Total Price</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cart.map(item => (
                        <tr>
                          <td>{item.id}</td>
                          <td>{item.title}</td>
                          <td>
                            <img src={item.thumbnail} height={'200px'} />
                          </td>
                          <td>{item.price}</td>
                          <td>
                            <button className='btn' onClick={()=>dispatch(incrementQuantity(item.id))}>+</button>
                            <span className='border border-dark border-1 bg-light p-2'>{item.quantity}</span>
                            <button className='btn'onClick={()=>dispatch(decrementQuantity(item.id))}>-</button>
                          </td>
                          <td>{ item.quantity * item.price}</td>
                          <td>
                            <button className='btn' onClick={()=>dispatch(removeFromCart(item.id))}>
                              <i className="fa-solid fa-trash fa-xl text-danger"></i>
                            </button>
                          </td>

                        </tr>
                      ))
                    }

                  </tbody>
                </table>
                </>
                : <h2 className='border border-2  p-5 text-center'> No Items Added to Cart</h2>
            }


          </div>
          <div className="col-3">
            <div className='m-3 bg-warning rounded p-2 mt-5'>
              <h5>Total Products : <span className='fw-bolder'>{cart.length}</span></h5>
              <h5>Total Amount : <span className='fw-bolder'>{Math.ceil(cart.reduce((prev,item)=>prev+item.quantity*item.price,0))}</span></h5>
              <div className='d-grid'>
                <button className="btn btn-success " onClick={()=>dispatch(checkOut())}>CHECKOUT</button>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
