import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../component/Layout/Card'
import { ToastContainer } from 'react-toastify'
import { useDispatch } from 'react-redux'

const Cart = () => {
    const cart_items = useSelector(store => store.cart.cart_items)
    // console.log(cart_items)
    const item_length = cart_items.length

    const items = useSelector(store => store.item.items)
    const dispatch = useDispatch()
    return (
        <>
            <div className='container'>
                {
                    item_length > 0 ?
                        <table className='table table-bordered mt-5 text-center table-hover'>
                            <thead className='p-3'>
                                <tr>
                                    <th className='p-3'>S.No.</th>
                                    <th>Product Image</th>
                                    <th>Product Details</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart_items.map((item, index) => {
                                        return <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <img src={item.product_image} width={'200px'} />
                                            </td>
                                            <td>
                                                <h4>{item.product_name}</h4>
                                                <h5>{item.product_price}</h5>
                                                <p>{item.product_description}</p>
                                            </td>
                                            <td>
                                                <button onClick={() => dispatch({type:"REMOVE_FROM_CART", payload: item})} className='btn btn-warning'>Delete</button>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                        :
                        <div className='text-center text-secondary fs-2 shadow-lg p-3'>There is no items in cart</div>
                }
            </div>

            <ToastContainer theme='dark' position='top-right'></ToastContainer>
            <div className='container my-5'>
            <h2>Recommended Item's For You</h2>
                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">

                    {
                        cart_items.length > 0 ?
                        items.slice(0,4).map((item, index) => {
                            // return <h2 key={item.id}>{item.product_price}</h2>
                            return <Card key={item.id} item={item} />
                        })
                        :
                        items.slice(0,8).map(item => {
                            // return <h2 key={item.id}>{item.product_price}</h2>
                            return <Card key={item.id} item={item} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Cart