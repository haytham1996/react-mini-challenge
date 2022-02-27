import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { connect } from 'react-redux';
import { getAllProduct } from '../../redux/actions/poductActions'
import PropTypes from 'prop-types'
const Home = ({ getAllProduct, Products }) => {
  useEffect(() => {
    getAllProduct()
    console.log(Products.Products)
  }, [getAllProduct])


  return (
    <div className=''>
      dsdsdsdsds
    </div>
  )
}



const mapStateToProps = (state) => ({
  Products: state.Products
})

export default connect(mapStateToProps, { getAllProduct })(Home)