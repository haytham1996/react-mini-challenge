import React from 'react'
import './product.css'

function SingleProduct(props) {
    const
        { product } = props
    return (
        <div className='body'>
            <div className="container">
                <div className="imgBox">
                    <img src={product.image} alt="" />
                </div>
                <div className="details">
                    <div className="content">
                        <h2>
                            {product.title}<br />
                            <span>{product.category}</span>
                        </h2>
                        <p>
                            {product.description}
                        </p>
                        <h3>{product.price}</h3>
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct