import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaTrash } from 'react-icons/fa';
import { addToCart, removeSingleItem, removeToCart } from '../../redux/reduxSlice';
import { Link, Outlet } from 'react-router-dom'
import CheckoutPage from './CheckoutPage';


const Cart = () => {

  const[totalBill, setTotalBill] = useState(0)

  const {carts} = useSelector(state=>state.allDetail)
  console.log("cart page _____ ", carts)
  
  const dispatch = useDispatch()

// increasing quantity one by one 
  const incrementHanlder = (ele) =>{
    dispatch(addToCart(ele))
  }

  // decreasing quantity one by one 
  const decrease = (ele) =>{
    dispatch(removeSingleItem(ele))
  }

// deleting item from cart 
const deleteItem = (item) =>{
  dispatch(removeToCart(item))
}


  const grandTotal = () =>{
    let total = 0;
    carts.map(item =>{
      total = item.price * item.qnty + total; 
    })
    setTotalBill(total)
  }

  useEffect(()=>{
    grandTotal()
  },[grandTotal])


  return (
    <div>
        <h1 className='text-primary text-center fw-bold fs-3 my-3'>Shopping Cart Detail Page</h1>

        <div className='container-fluid my-4'>
          <div className="row">
              <div className='col-md-7'>
                
              <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      
                      <th scope="col">Operation</th>
                      <th scope="col">Photo</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Sub Total</th>
                    </tr>
                  </thead>
                  <tbody>
                        {
                            carts.map(item=>{
                              return(
                                <tr>
                                      <td>
                                        <button onClick={()=>deleteItem(item._id)} className='text-danger fs-5'><FaTrash /></button>
                                      </td>
                                      <td>
                                        <img src={`http://localhost:4000/api/v3/auth/${item.img}`} height={60} width={50} />
                                      </td>
                                      <td>{item.title}</td>
                                      <td>{item.price}</td>
                                      <td>
                                        <button onClick={()=>incrementHanlder(item)} className='btn btn-warning btn-sm me-2'>+</button>
                                        {item.qnty}                                          
                                        {/* <button onClick={()=>decrease(item)} className='btn btn-warning btn-sm ms-2'>-</button> */}
                                        <button onClick={item.qnty ? ()=>decrease(item) : ()=>deleteItem(item.id)} className='btn btn-warning btn-sm ms-2'>-</button>                                        
                                      </td>
                                      <td>Rs. {item.qnty * item.price} /-</td>
                                </tr>
                                  
                                  
                                  )
                                })
                              }                   
                  </tbody>
              </table>
                              <h4 className="text-success text-center fw-bold">Grand Total Amount: {totalBill} / - PKR</h4>
                
              </div>
              <div className='col-md-4 ms-1'>

              <ul class="list-group">
                  <li class="list-group-item">Summary</li>
                  <li class="list-group-item">Estimate Shipping and Tax</li>
                  <li class="list-group-item">Sub Total: 0</li>
                  <li class="list-group-item">Shipping: 0</li>
                  <li class="list-group-item">Total: {totalBill}</li>
                  <Link to="/checkout" className='btn btn-dark'>GO TO CHECKOUT</Link>
              </ul>

              </div>
          </div>
        </div>

        <CheckoutPage totalBill={totalBill}  />

    </div>
  )
}

export default Cart
