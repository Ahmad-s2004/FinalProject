import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/reduxSlice';


const KidsProduct = () => {

    const {_id} = useParams();

    const [amount, setAmount] = useState(0)
    const [data, setData] = useState([])

    const dispatch = useDispatch()


  const userData = async () => {
    let res = await fetch(`http://localhost:4000/kids/${_id}`)
    res = await res.json()
    setData(res)
    
    userData()
  }

  useEffect(() => {
    userData()
  }, [])
  


  const sendData = (ele) =>{
    dispatch(addToCart(ele))
  }
  
   
  
  return (
    <div className='lightgrey-color padding-top-bottom'>
        <div className="container">
            <div className="row ">
                <div className="col-lg-6 text-center">
                    <img src={`http://localhost:4000/api/v3/auth/${data.img}`} alt="" />
                </div>
                <div className="col-lg-6">
                    <div className="fnt-mont h5 fw-bold">{data.title}</div>
                    <div className="fnt-mont h6">Rs.{data.price}</div>
                    <div className="fnt-mont fw-bold">Size: {data.size}</div>
                    <div className="fnt-mont mt-2">{data.description}</div>
                    <div className="fnt-mont fw-1 fnt-color">Details:</div>
                    <span className="fnt-mont fnt-color fw-2 ">{data.detail}</span>
                    <div className="fnt-mont fw-1 fnt-color">Color: <span className='fw-2'>{data.color}</span></div>
                    <div className="fnt-mont fw-1 fnt-color">Fabric: <span  className='fw-2'>{data.fabric}</span></div>
                    <div className="w-25 col-8 mt-5">
                        <a className="btn btn-dark in-dec-btn fw-4" onClick={()=>setAmount(amount>0?amount-1:0)}><i className="fa-solid fa-minus"/></a>
                        <input type="text" value={amount} className='text-center lightgrey-color mt-2 fnt-mont w-15 fw-3' style={{border:"none"}} />
                        <a className="btn btn-dark in-dec-btn fw-4" onClick={()=>setAmount(amount+1)}><i className="fa-solid fa-plus"/></a>
                    </div>
                    <a onClick={() => sendData(data)} className="btn btn-dark fnt-mont py-3 px-4"  style={{height:"60px"}}>ADD TO CART</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KidsProduct