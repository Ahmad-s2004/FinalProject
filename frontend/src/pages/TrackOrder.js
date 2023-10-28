import React from 'react'

const TrackOrder = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="text-center font-mont h5 bg-lightgrey fw-bold my-3 py-3">TRACK YOUR ORDER</div>
      </div>
      <form className='container my-5'>
        <div className="mb-3 text-center">
          <label htmlFor="exampleInputEmail1" className="form-label font-mont h5">Enter Email address</label>
          <input type="email" className="form-control w-50 m-auto bdr-1" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3 text-center">
          <label htmlFor="exampleInputPassword1" className="form-label font-mont h5">Enter Order Number</label>
          <input type="password" className="form-control w-50 m-auto bdr-1" id="exampleInputPassword1" />
        </div>
        <div className="text-center">
        <button type="submit" className="btn btn-dark py-3 px-4 font-mont fw-bold order-tracking-btn">Order Track By Email</button>
        </div>
      </form>

    </div>
  )
}

export default TrackOrder