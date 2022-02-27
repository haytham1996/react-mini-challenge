import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from '../../redux/actions/userActions'
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

function Users({ getAllUsers, Users }) {
  const navigate = useNavigate();
  useEffect(() => {
    getAllUsers()

  }, [getAllUsers])


  const navigateToDetail = (id) => {
    navigate(`/users/detail/${id}`)
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>FULLNAME</th>
            <th>ADDRESS</th>
            <th>PHONE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {Users.Users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.name.firstname}{' '}{user.name.lastname}</td>
              <td>{user.address.city}</td>
              <td>{user.phone}</td>
              <td>
                <button
                  type="button"
                  className="small"
                  onClick={() => navigateToDetail(user.id)}
                >
                  Detail
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>


    </div>
  )
}

const mapStateToProps = (state) => ({
  Users: state.Users
})

export default connect(mapStateToProps, { getAllUsers })(Users)