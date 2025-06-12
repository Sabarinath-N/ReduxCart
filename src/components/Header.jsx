import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { search } from '../../redux/slices/productSlice';


function Header() {

    const { wishlist } = useSelector((state) => state.wishSlice)
    const { cart } = useSelector((state) => state.cartSlice)

    const dispatch = useDispatch()
    return (

        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>
                        <img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" height={"60px"} alt="" />
                        {' '}
                        REDUXCART
                    </Navbar.Brand>
                    <div>
                        <input type="search" className='form-control ' onChange={(e)=>dispatch(search(e.target.value))}  placeholder='Enter Keyword to Search' />
                    </div>
                    <div>
                        <Link className='btn border p-2 border-3 border-dark me-3' to={'/wish'}>
                            <i className="fa-solid fa-heart text-danger fa-xl"></i>{' '} Wishlist {' '}
                            <span className="badge bg-dark">{wishlist.length}</span>
                        </Link>
                        <Link className='btn border p-2 border-3 border-dark me-3' to={'/cart'}>
                            <i className="fa-solid fa-cart-shopping fa-xl"></i>{' '} Cart {' '}
                            <span className="badge bg-dark">{cart.length}</span>

                        </Link>

                    </div>
                </Container>
            </Navbar>


        </>
    )
}

export default Header
