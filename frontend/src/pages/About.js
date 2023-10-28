import React from 'react'

const About = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="text-center font-mont h5 bg-lightgrey fw-bold my-3 py-3">ABOUT US</div>
      </div>
      <div className="container">
        <div className="text-center">
        <img src="./images/logo.svg" width={400} alt="" />
        </div>
        <div className="font-mont fw-light my-4">
        A high-street brand introduced by one of the largest names in the textile industry, Sapphire is celebrated for combining 100% pure fabric with unprecedented design aesthetic to create designer wear at an affordable price. Our range of clothing has something for everyone: Daily wear, party wear, formal wear, silk tunics, scarves and unstitched fabric. The overarching theme of the collections is providing affordable designer clothes to the masses.
        </div>
        <div className="font-mont fw-light mb-5">
        This meld of exquisite design and high class fabric has resulted in the breakthrough of this one of a kind retail brand. Sapphire’s commitment to quality fabric over the years has made it a household name, synonymous with excellence. We hope you enjoy wearing them as much we love making them for you!
        </div>
      </div>
    </div>
  )
}

export default About