import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getAllProduct } from '../../redux/actions/poductActions'
import SingleProduct from './SingleProduct';
import './product.css'
const Product = ({ getAllProduct, Products }) => {
    useEffect(() => {
        getAllProduct()
        console.log(Products.Products)
    }, [getAllProduct])


    return (
        <div className='body'>
            {Products.Products.map(p => {
                return (<SingleProduct product={p} key={p.id} />)
            })}
        </div>
    )
}



const mapStateToProps = (state) => ({
    Products: state.Products
})

export default connect(mapStateToProps, { getAllProduct })(Product)