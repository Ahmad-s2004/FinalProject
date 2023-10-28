import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./Carousel3.css"

const Carousel3 = () => {
    const options = {
      items:4,
        loop: true,
        dots: false,
        loop: true,
        slidePerView:4,
        responsive: {
            1100:{
              items:4,
            },
            724:{
              items:3,  
            },
            500:{
              items:2,
            },
            370:{
              items:2,  
            }
          }
    }
  return (
    <div>
        <div className="text-center h3 heading mt-4">SHOP BY CATEGORY</div>
        <div className='underline mb-4'></div>
        <OwlCarousel className='owl-theme' loop margin={10} {...options}>
    <div class='item'>
        <h4><img src="./pictures/carousel3/unstiched.png"className='cat-img' alt="" /></h4>
        <h6 className='text-center'>Unstiched</h6>
    </div>
    <div class='item'>
        <h4><img src="./pictures/carousel3/men.png"className='cat-img' alt="" /></h4>
        <h6 className='text-center'>Men</h6>
    </div>
    <div class='item'>
        <div><img src="./pictures/carousel3/women.png" className='cat-img' alt="" /></div>
        <h6 className='text-center mt-2'>Women</h6>
    </div>
    <div class='item'>
        <h4><img src="./pictures/carousel3/home.png" className='cat-img' alt="" /></h4>
        <h6 className='text-center'>Home</h6>
    </div>
    <div class='item'>
        <h4><img src="./pictures/carousel3/accessories.png" className='cat-img' alt="" /></h4>
        <h6 className='text-center'>Accessories</h6>
    </div>
    <div class='item'>
        <h4><img src="./pictures/carousel3/beauty.png" className='cat-img' alt="" /></h4>
        <h6 className='text-center'>Beauty</h6>
    </div>
    <div class='item'>
        <h4><img src="./pictures/carousel3/modest-wear.png" className='cat-img' alt="" /></h4>
        <h6 className='text-center'>Modest Wear</h6>
    </div>
    <div class='item'>
        <h4><img src="./pictures/carousel3/kids.png" className='cat-img' alt="" /></h4>
        <h6 className='text-center'>Kids</h6>
    </div>
</OwlCarousel>;
    </div>
  )
}

export default Carousel3