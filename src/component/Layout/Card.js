import React from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Card = ({item}) => {
    // const Card = (props) => {
    
    const dispatch = useDispatch()

    const handleClick= () =>{   
        dispatch({type: "ADD_TO_CART", payload: item})
        toast.success(item.product_name + " added to cart");    
    }

    return (
        <>
            <div className="col">
                <div className="card text-center">
                    <img src={item.product_image} className="card-img-top text-center" alt="..." style={{width:'300px', height:'300px'}} />
                        <div className="card-body" style={{height:'200px'}}>
                            <h3 style={{height:'50px'}} className="card-title">{item.product_name}</h3>
                            <h4>{item.product_price}</h4>
                            <p className="card-text text-truncate">{item.product_description}</p>
                            <button onClick={handleClick} className='btn btn-warning'>Add to Cart</button>
                        </div>
                </div>
            </div>

        </>
    )
}

export default Card