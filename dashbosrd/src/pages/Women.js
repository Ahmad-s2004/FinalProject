import React, { useEffect, useState } from 'react'

const Women = () => {
  const [data, setData] = useState([])

  const userData = async () => {
    let res = await fetch("http://localhost:4000/api/v3/auth/data/women")
    res = await res.json()
    setData(res)
    userData()
  }

  useEffect(() => {
    userData()
  }, [])


  

  const deleteone = async(id) =>{
    let result = await fetch(`http://localhost:4000/api/v2/auth/user/${id}`,{
      method: "delete"
    })
    result = await result.json()
    if(result){
      // alert("record deleted successfully")
      userData()
    }
  }


  return (
    <div>
      <div className="container">
        <div className="text-center h4 fw-bold my-3">ENTER DATA</div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 my-1">
            <div className="h6">TITLE</div>
            <input type="text" className='w-75' />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 my-1">
            <div className="h6">Description</div>
            <input type="text" className='w-75' />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 my-1">
            <div className="h6">PRICE</div>
            <input type="text" className='w-75' />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 my-1">
            <div className="h6">DETAILS</div>
            <input type="text" className='w-75' />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 my-1">
            <div className="h6">COLOR</div>
            <input type="text" className='w-75' />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 my-1">
            <div className="h6">FABRIC</div>
            <input type="text" className='w-75' />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 my-1">
            <div className="h6">SIZE</div>
            <input type="text" className='w-75' />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 my-1">
            <div className="h6">IMAGE</div>
            <input type="file" className='w-75' />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="text-center h4 fw-bold mt-4">WOMEN PRODUCT</div>
      </div>
      <div className="container">
        <table class="table mt-5">
          <thead>
            <tr>
              <th scope="col" className='border'>Sr.</th>
              <th scope="col" className='border'>Title</th>
              <th scope="col" className='border'>Description</th>
              <th scope="col" className='border'>Price</th>
              <th scope="col" className='border'>Details</th>
              <th scope="col" className='border'>Color</th>
              <th scope="col" className='border'>Fabric</th>
              <th scope="col" className='border'>Size</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((x, ind) => {
                return (
                  <>
                    <tr>
                      <th scope="row" >{ind+1}</th>
                      <td className='border'>{x.title}</td>
                      <td className='border'>{x.description}</td>
                      <td className='border'>Rs.{x.price}</td>
                      <td className='border'>{x.detail}</td>
                      <td className='border'>{x.color}</td>
                      <td className='border'>{x.fabric}</td>
                      <td className='border'>{x.size}</td>
                      <td className='border'><button onClick={()=>deleteone(x._id)} className="btn btn-dark">DEl</button></td>
                    </tr>
                  </>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Women