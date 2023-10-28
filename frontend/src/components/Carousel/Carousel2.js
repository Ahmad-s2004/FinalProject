import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./Carousel2.css"

const Carousel2 = () => {
    const options = {
        items:4,
        loop: false,
        dots: false,
        slidePerView:4,
        responsive: {
          1100:{
            items:6,
          },
          724:{
            items:5,  
          },
          500:{
            items:3,
          },
          370:{
            items:2,  
          }
        }
    }
  return (
    <div className='container-fluid mt-5'>
      <div className="align-items-center row">
        <div className="col-lg-2 text-center h3 w-25 font-montd fnt-bol">WHAT'S <br /> NEW</div>
    {/* <div className='color'> */}
        <OwlCarousel className='w-75 col-lg-10 owl-theme' margin={10} {...options}>
    <div class='item'>
        <h4><img src="./pictures/carousel2/pic1.avif" className='circle' alt="" /></h4>
    </div>
    <div class='item'>
        <h4><img src="./pictures/carousel2/pic2.avif" className='circle' alt="" /></h4>
    </div>
    <div class='item'>
        <h4><img src="./pictures/carousel2/pic3.avif" className='circle' alt="" /></h4>
    </div>
    <div class='item'>
        <h4><img src="./pictures/carousel2/pic4.avif" className='circle' alt="" /></h4>
    </div>
    <div class='item'>
        <h4><img src="./pictures/carousel2/pic5.avif" className='circle' alt="" /></h4>
    </div>
    <div class='item'>
        <h4><img src="./pictures/carousel2/pic6.avif" className='circle' alt="" /></h4>
    </div>
    <div class='item'>
        <h4><img src="./pictures/carousel2/pic7.avif" className='circle' alt="" /></h4>
    </div>
    <div class='item'>
        <h4><img src="./pictures/carousel2/pic8.avif" className='circle' alt="" /></h4>
    </div>
</OwlCarousel>
    </div>
    </div>
  )
}

export default Carousel2