import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const cart_items = useSelector(store => store.cart.cart_items)
    const no_of_cart_items = cart_items.length
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-secondary p-3 d-flex">
                <Link className="navbar-brand text-white fs-3" to={'/'}>Navbar</Link>
                {/* <div className="container-fluid"> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active text-white fs-5" aria-current="page" to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white fs-5" to={'/cart'}>Cart</Link>
                        </li>
                    </ul>
                </div>
                {/* </div> */}
                <div className='items'>No. of items in cart:{no_of_cart_items} </div>
            </nav >
            <div className='row bg-primary'>
                <div className='col-md-7'></div>
                <div className='col-md-5 p-3'>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                </div>
            </div>
        </>
    )
}

export default Navbar