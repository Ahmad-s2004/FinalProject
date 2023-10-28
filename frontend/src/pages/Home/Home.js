import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Home = () => {

  const [data, setData] = useState([])

  const userData = async () => {
    let res = await fetch("http://localhost:4000/api/v3/auth/data/home")
    res = await res.json()
    setData(res)
    userData()
  }

  useEffect(() => {
    userData()
  }, [])


  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {
            data.map((x, ind) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6 my-2" key={ind}>
                  <div className="card">
                    <img src={`http://localhost:4000/api/v3/auth/${x.img}`} className="card-img-top" alt="sas" />
                    <div className="card-body">
                    <h5 className="card-title fnt-mont fnt-title">{x.title}</h5>
                      <div className="d-flex">
                      <p className="card-text h6 col-6">Rs.{x.price}</p>
                      <Link to={`/home/${x._id}`} className="btn btn-dark btn-margin col-6">View Item</Link>
                      </div>
                    </div>
                  </div>

                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home