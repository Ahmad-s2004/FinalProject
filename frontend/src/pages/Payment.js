import React from 'react'

const Payment = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="text-center font-mont h5 bg-lightgrey fw-bold my-3 py-3">PAYMENTS</div>
      </div>
      <div className="container mb-5">
        <div className="font-mont mb-4">For your convenience, we offer multiple payment methods for local and international orders that are secure and encrypted.</div>
        <div className="font-mont fw-bold h5">Cash On Delivery (Local Orders Only)</div>
        <ul>
          <li className='fw-light font-mont'>COD is available for nationwide orders.</li>
          <li className='fw-light font-mont'>You will have to pay the required amount in cash at the time of the delivery to the courier, and will be provided with a receipt along with your purchase.</li>
          <li className='fw-light font-mont'>Please cross verify your order number received with your order confirmation email against the receipt.</li>
          <li className='fw-light font-mont'>There are no additional charges for Cash on Delivery orders.</li>
        </ul>
        <div className="font-mont fw-bold h5">Online Payments - Credit Card / Debit Card (Local & International Orders)
</div>
        <ul>
          <li className='fw-light font-mont'>We offer end to end encrypted credit card / debit card payments. Our payment gateways are authenticated and verified by 3-D secure. 3-D Secure is a protocol designed to be an additional security layer for online credit and debit card transactions.</li>
          <li className='fw-light font-mont'>You will be redirected to Bank Al Falah’s safe payment gateway to make payments via the following credit / debit cards.</li>
          <div className='fw-light font-mont'>o VISA</div>
          <div className='fw-light font-mont'>o MASTER</div>
        </ul>
      </div>
      
    </div>
  )
}

export default Payment