import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="text-center notification-bar">
            <h3>You must login in order to continue!</h3>
            <Link to="/login" className="btn btn-default custom-btn">Login</Link>
          </div>
        </div>
      </div>
    )
  }
}