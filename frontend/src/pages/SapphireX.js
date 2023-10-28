import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const SapphireX = () => {
    const options = {
        items:4,
          loop: true,
          dots: true,
          loop: true,
          slidePerView:4,
          responsive: {
              1100:{
                items:2,
              },
              724:{
                items:2,  
              },
              500:{
                items:2,
              },
              370:{
                items:1,  
              }
            }
      }
    return (
      <div>
           <div className="container-fluid">
        <div className="text-center font-mont h5 bg-lightgrey fw-bold my-3 py-3">THE EDIT</div>
      </div>
          <OwlCarousel className='owl-theme' loop margin={10} {...options}>
      <div class='item'>
          <h4><img src="./images/img1.png"className='cat-img' alt="" /></h4>
      </div>
      <div class='item'>
          <h4><img src="./images/img2.GIF"className='cat-img' alt="" /></h4>
      </div>
      <div class='item'>
          <h4><img src="./images/img3.GIF"className='cat-img' alt="" /></h4>
      </div>
      <div class='item'>
          <h4><img src="./images/img4.GIF"className='cat-img' alt="" /></h4>
      </div>
      <div class='item'>
          <h4><img src="./images/img5.png"className='cat-img' alt="" /></h4>
      </div>
      <div class='item'>
          <h4><img src="./images/img6.png"className='cat-img' alt="" /></h4>
      </div>
      <div class='item'>
          <h4><img src="./images/img7.png"className='cat-img' alt="" /></h4>
      </div>
      <div class='item'>
          <h4><img src="./images/img8.png"className='cat-img' alt="" /></h4>
      </div>
    
  </OwlCarousel>;
      </div>
    )
}

export default SapphireX