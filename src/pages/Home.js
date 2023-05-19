import React, { useState } from 'react'
import { useSelector } from "react-redux"
import Card from '../component/Layout/Card'
import { ToastContainer } from 'react-toastify'

const Home = () => {
    const items = useSelector(store => store.item.items)
    // console.log(items)
    const [limit, setLimit] = useState(8)

    const item_length = items.length

    const viewMore = () => {
        setLimit(limit + 4)
    }

    const viewLess = () => {
        setLimit(limit - 4)
    }


    return (
        <>
            <ToastContainer theme='dark' position='top-right'></ToastContainer>
            <div className='container my-5'>
                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {
                        items.slice(0, limit).map(item => {
                            // return <h2 key={item.id}>{item.product_price}</h2>
                            return <Card key={item.id} item={item} />
                        })
                    }
                </div>
                <div className='text-center mt-3'>
                    {
                        item_length > limit &&
                        <button onClick={viewMore} className='btn btn-info btn-lg me-3'>View More</button>
                    }
                    {
                        limit > 4 &&
                        <button onClick={viewLess} className='btn btn-info btn-lg'>View Less</button>
                    }
                </div>

            </div>

        </>
    )
}

export default Home