import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Accessories = () => {
  const [data, setData] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [size, setSize] = useState('')
  const [fabric, setFabric] = useState('')
  const [color, setColor] = useState('')
  const [detail, setDetail] = useState('')
  const [img, setImg] = useState('')

   const saveData = async(e) =>{
    e.preventDefault()
    console.log(title, description, price)
    const formData = new FormData()
    formData.append('title', title)
    formData.append('description', description)
    formData.append('price', price)
    formData.append('size', size)
    formData.append('fabric', fabric)
    formData.append('color', color)
    formData.append('detail', detail)
    formData.append('img', img)
    let res = await fetch("http://localhost:4000/api/v1/auth/kids/register",{
          method: 'post',
          body: JSON.stringify({title, description, price, size, fabric, color, detail, img}),
          headers: {
            "Content-Typex" : "multipart/form-data"
          }
        })
    res = res.json;
    alert("data saved")
   }




   
  //  const saveData = async(e) =>{
  //   e.preventDefault()
  //   console.log(title, description, price)
  //   let res = await fetch("http://localhost:4000/api/v1/auth/kids/register",{
  //     method: 'post',
  //     body: JSON.stringify({title, description, price, size, fabric, color, detail, img}),
  //     headers: {
  //       "Content-Type" : "application/json"
  //     }
  //   })
  //   res = await res.json;
  //   alert("data saved")
  //  }




















  const userData = async () => {
    let res = await fetch("http://localhost:4000/api/v3/auth/data/accessories")
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
            <input name='title' value={title} onChange={(e)=> setTitle(e.target.value)} type="text" className='w-75' />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 my-1">
            <div className="h6">Description</div>
            <input name='description' value={description} onChange={(e)=> setDescription(e.target.value)} type="text" className='w-75' />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 my-1">
            <div className="h6">PRICE</div>
            <input name='price' value={price} onChange={(e)=> setPrice(e.target.value)} type="text" className='w-75' />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 my-1">
            <div className="h6">DETAILS</div>
            <input name='detail' value={detail} onChange={(e)=> setDetail(e.target.value)} type="text" className='w-75' />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 my-1">
            <div className="h6">COLOR</div>
            <input name='color' value={color} onChange={(e)=> setColor(e.target.value)} type="text" className='w-75' />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 my-1">
            <div className="h6">FABRIC</div>
            <input name='fabric' value={fabric} onChange={(e)=> setFabric(e.target.value)} type="text" className='w-75' />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 my-1">
            <div className="h6">SIZE</div>
            <input name='size' value={size} onChange={(e)=> setSize(e.target.value)} type="text" className='w-75' />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 my-1">
            <div className="h6">IMAGE</div>
            <input onChange={(e)=> setImg(e.target.files[0])} type="file" className='w-75' />
          </div>
        </div>
        <button type='submit' onClick={saveData} className='btn btn-dark'></button>
      </div>
      <div className="container">
        <div className="text-center h4 fw-bold mt-4">ACCESSORIES PRODUCT</div>
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

export default Accessories