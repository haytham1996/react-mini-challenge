import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getById } from '../../redux/actions/userActions'
import { connect } from 'react-redux';
import { getCarteByUser } from '../../redux/actions/carteActions';
import { getProductById } from '../../redux/actions/poductActions';


function DetailUser({ getById, User, getCarteByUser, getProductById, Cartes, Product }) {
    const { id } = useParams()

    useEffect(() => {
        getById(id)
        getCarteByUser(id)

        for (let i = 0; i < Cartes.Cartes.length; i++) {

            // getProductById(Cartes.Cartes[i].product)
            //console.log(Cartes.Cartes[i.products])
        }


    }, [getById, getCarteByUser, getProductById])




    return (
        <div>
            <h1>User Detail</h1>
            <h2>{User.username}</h2>
            <h2>{User.email}</h2>


        </div>
    )
}

const mapStateToProps = (state) => ({
    User: state.Users.User,
    Cartes: state.Cartes,
    Product: state.Products.Product
})

export default connect(mapStateToProps, { getById, getCarteByUser, getProductById })(DetailUser)
