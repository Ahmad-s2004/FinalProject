import React from 'react'

const FAQs = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="text-center bg-lightgrey h5 fw-bold py-3 mb-3 font-mont">FAQs</div>
      </div>
      <div className="accordion container my-5" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button fw-bold font-mont" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              My Account
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body">
              <div className='my-3 h6 fw-bold font-mont'>1. Is an account necessary for placing an order?</div>
              <div className="my-3 h6 font-mont">No, you can checkout as a guest. However, creating a SAPPHIRE account will enhance your
              shopping experience.</div>
              <ul>
                <li className='h6 font-mont fw-light'>You can save your shipping and billing information to ensure a faster checkout process.</li>
                <li className='h6 font-mont fw-light'>You will be kept up to date with exclusive offers, sales and updates.</li>
                <li className='h6 font-mont fw-light'>You can request an exchange directly from your account.</li>
                <li className='h6 font-mont fw-light'>You can track your orders and review your order history.</li>
                <li className='h6 font-mont fw-light'>You can add the items you loved to your Wish List and save it for later.</li>
              </ul>
            </div>
            <div className="accordion-body">
              <div className='my-3 h6 fw-bold font-mont'>2. How do I make an account?</div>
              <div className="my-3 h6 font-mont">To create your SAPPHIRE Online Account, follow these simple instructions:</div>
              <ul>
                <li className='h6 font-mont fw-light'>For desktop users: Click on the Account icon on the top right. Next, click on “Create Your Account”. Enter your details and register.</li>
                <li className='h6 font-mont fw-light'>For mobile users: Go to the menu and click on the Account icon. Enter your details and register.</li>
              </ul>
            </div>
            <div className="accordion-body">
              <div className='my-3 h6 fw-bold font-mont'>3. What if I forget my password?</div>
              <div className="my-3 h6 font-mont">You can reset your password by clicking on “Forgot your password?” on the Account section. Enter your Email Address to receive a password reset link. Sign In using your new password.</div>
            </div>
            <div className="accordion-body">
              <div className='my-3 h6 fw-bold font-mont'>4. How can I update/edit my shipping or billing address details?</div>
              <div className="my-3 h6 font-mont">Sign in to your account and open the “Addresses” section . To edit your existing address, click on “Edit”. To delete an existing address, click on “delete”. To update a new address, click on “Add a New Address”.</div>
            </div>
            <div className="accordion-body">
              <div className='my-3 h6 fw-bold font-mont'>5. Where can I view my order history?</div>
              <div className="my-3 h6 font-mont">Sign in to your account and open the “Dashboard” on your account page to view your order history.</div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button className="accordion-button collapsed  fw-bold font-mont" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              Order
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
          <div className="accordion-body">
              <div className='my-3 h6 fw-bold font-mont'>How can I place an order?</div>
              <div className="my-3 h6 font-mont">Once you have added all your desired items to your shopping cart, follow these instructions:</div>
              <ul>
                <li className='h6 font-mont fw-light'>Click on the "Shopping Bag" icon and proceed to Checkout</li>
                <li className='h6 font-mont fw-light'>Enter all your required contact, shipping and billing information.</li>
                <li className='h6 font-mont fw-light'>Click on "Continue to Payment" and select your preferred payment method.</li>
                <li className='h6 font-mont fw-light'>Click on 'Complete Order' and check your email for an order confirmation Email.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button className="accordion-button collapsed  fw-bold font-mont" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              Payment
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
          <div className="accordion-body">
              <div className='my-3 h6 fw-bold font-mont'>1. What payment options do I have?</div>
              <ul>
                <li className='h6 font-mont fw-light'>Cash on Delivery </li>
                <li className='h6 font-mont fw-light'>SafePay </li>
                <li className='h6 font-mont fw-light'>PayPal (2Checkout) </li>
                <li className='h6 font-mont fw-light'> Debit / Credit Cards (VISA, MASTER)</li>
                <li className='h6 font-mont fw-light'>Debit / Credit Cards (2Checkout- AMEX, JCB, DISCOVER) </li>
              </ul>
              <div className="my-3 h6 font-mont">Please visit our Payments Guide for further details regarding payment methods for online orders.</div>
            </div>
            <div className="accordion-body">
              <div className='my-3 h6 fw-bold font-mont'>2. What are the conditions for Cash on Delivery (COD)?</div>
              <div className="my-3 h6 font-mont">To avail COD, please follow these instruction.
</div>
              <ul>
                <li className='h6 font-mont fw-light'> At checkout, select 'Cash on Delivery'.</li>
                <li className='h6 font-mont fw-light'>Upon the courier's arrival, pay your total order amount in cash.</li>
              </ul>
            </div>
            <div className="accordion-body">
              <div className='my-3 h6 fw-bold font-mont'>3. Is Cash on Delivery (COD) available internationally?</div>
              <div className="my-3 h6 font-mont">Unfortunately, COD is only available in Pakistan.</div>
            </div>
            <div className="accordion-body">
              <div className='my-3 h6 fw-bold font-mont'>4. Is there any form of advance payment required for COD?</div>
              <div className="my-3 h6 font-mont">No, you need to pay the full amount in cash once your order is delivered to you. For COD orders of a large amount, our Customer Care team may contact you for verification before your order is dispatched.</div>
            </div>
            <div className="accordion-body">
              <div className='my-3 h6 fw-bold font-mont'>5. Can I pay COD with a cheque?</div>
              <div className="my-3 h6 font-mont">We only accept cash for COD orders.</div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default FAQs