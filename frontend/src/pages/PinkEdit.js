import React from 'react'

const pinkEdit = () => {
    return (
        <div>
            <div className="container">
                <div className="text-center h3 my-2 fw-bold" style={{color:"pink"}}>THE PINK</div>
            </div>
            <video className='w-100' controls>
                <source src="https://cdn.shopify.com/videos/c/o/v/0f0b0d7ed2e8424fac6c31bede508c06.mp4" type="video/mp4" />
            </video>
          
        </div>
    )
}

export default pinkEdit