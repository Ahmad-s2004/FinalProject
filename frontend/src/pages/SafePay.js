import React from 'react'

const SafePay = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="text-center font-mont h5 bg-lightgrey fw-bold mt-3 py-3">SAFEPAY GUIDE</div>
      </div>
      <div className="text-center">
        <img src="./images/sapphireXsafepay.png" width={500} alt="" />
      </div>
      <div className="container mb-5">
        <div className="fw-bold h5 font-mont">FOR LOCAL ORDERS ONLY</div>
        <div className="fw-light h6 font-mont">You can now pay for your Sapphire order directly through Bank transfer with Safepay’s secure payment platform. Follow these simple steps for a hassle-free experience.</div>
        <ul>
          <li className='fw-light h6 font-mont'>Select SafePay as your payment method at Checkout. You will be safely redirected to Safepay’s secure payment gateway. Your total transaction value will include shipping charges calculated at checkout if applicable.</li>
          <li className='fw-light h6 font-mont'>Select the bank your account is associated with and input your bank account number, CNIC and contact details. After entering the required details, select “Make Payment”. While this is being processed, do not exit the page.</li>
          <li className='fw-light h6 font-mont'>You will then receive an OTP on the Phone Number or Email registered with your bank account. Enter the OTP on this page to complete your transaction.
            Safepay supports over 15 banks across Pakistan. Please review the requirements for your respective banks below.</li>
        </ul>
        <ul>
          <li className='fw-ligth'><span className='fw-bold'>Bank Alfalah</span>(Please enter your 14-digit account number)</li>
          <li className='fw-ligth'><span className='fw-bold'>Allied Bank</span>(Please ensure that your Account is Activated to use this service. Kindly Call ABL H/L 021-111-225-225 to activate your local e-commerce service)</li>
          <li className='fw-ligth'><span className='fw-bold'>Habib Metro Bank</span>(Please enter your 19 or 20 digit account number or 24 Alphanumeric IBAN)</li>
          <li className='fw-ligth'><span className='fw-bold'>Askari Bank</span>(Please enter your 13-digit bank account number (you will need to omit the leading '0')).</li>
          <li className='fw-ligth'><span className='fw-bold'>Faysal Bank</span>(Please enter your 14 digit or 16 digit account number)</li>
          <li className='fw-ligth'><span className='fw-bold'>Bank Islami</span>(Please enter your 15-digit account number)</li>
          <li className='fw-ligth'><span className='fw-bold'>Bank Al Habib</span>(Please enter 17 digit Account number or 24 Alpha-numeric IBAN)</li>
          <li className='fw-ligth'><span className='fw-bold'>Meezan Bank</span> (Please enter your 11-digit or 14-digit bank account number. You must have online banking enabled with Meezan Bank.)</li>
          <li className='fw-ligth'><span className='fw-bold'>Summit Bank</span>(Please enter your 12-digit or 20-digit bank account number. You must have online banking enabled with Summit Bank.)</li>
          <li className='fw-ligth'><span className='fw-bold'>Al Baraka Bank</span>(Please enter your 13-digit bank account number.)</li>
          <li className='fw-ligth'><span className='fw-bold'>Muslim Commercial Bank</span> (Please ensure your account is activated to use this service. Kindly Call MIB H/L 042-111-222-642 to activate your e-commerce service.)</li>
          <li className='fw-ligth'><span className='fw-bold'>Bank of Khyber</span>(Please enter your 14-digit or 16-digit account number)</li>
          <li className='fw-ligth'><span className='fw-bold'>NRSP Microfinance Bank</span>(Please enter your 16-digit bank account number)</li>
          <li className='fw-ligth'><span className='fw-bold'>JS Bank</span>(Please enter your 10-digit bank account number. You must have online banking enabled with JS Bank)</li>
        </ul>
      </div>
    </div>
  )
}

export default SafePay