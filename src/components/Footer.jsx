import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className="container-fluid bg-primary p-3">
        <div className="row">
          <div className="col">
            <h2 className="text-light">ReduxCart</h2>
            <p style={{ textAlign: 'justify' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero possimus sit eum necessitatibus blanditiis dicta! Laudantium voluptatum incidunt quo aliquam veritatis dolorum, culpa, dolor nihil perferendis ex quisquam magnam consectetur?  </p>
          </div>
          <div className="col">
            <h2 className="text-light text-center">Links</h2>
            <div className="d-flex justify-content-center align-items-center  flex-column h-75">
              <Link className='text-info' to={'./'}>Landing</Link>
              <Link className='text-info' to={'./wish'}>Wishlist</Link>
              <Link className='text-info' to={'./cart'}>Cart</Link>
            </div>   
          </div>
          <div className="col">
              <h2 className="text-light">Feedbacks</h2>
              <textarea name="" className='form-control my-3' id=""></textarea>
              <button /><button className="btn-success">Send</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
