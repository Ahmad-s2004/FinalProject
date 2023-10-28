import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Dashboard</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/newIn">New In Api</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/women">Women API</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/men">Men API</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/accessories">Accessories API</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/beauty">Beauty API</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/kids">Kids API</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home API</Link>
        </li>
      </ul>
      <form className="d-flex">
        <Link to="/register" className="btn btn-success" type="submit">Register</Link>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar