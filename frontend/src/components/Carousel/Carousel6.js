import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./Carousel6.css"

const Carousel6 = () => {
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
      <div className='container-fluid py-3 color'>
        <div className="text-center h4 font-mont fnt-bold">STYLED BY YOU</div>
        <div className="text-center h8 font-mont">#SAPPHIREXME</div>
    <div className='container mt-5'>
    {/* <div className='color'> */}
        <OwlCarousel className='owl-theme' loop margin={10} {...options}>
    <div class='item'>
        <h4><img src="./pictures/carousel6/Durefishan.png" alt="" /></h4>
        <div className="text-center font-mont h6 fnt-bold ">Durefishan</div>
        <div className="text-center font-mont h10">wearing our</div>
        <div className="text-center font-mont h9">Embroidered Chiffon Suit</div>
    </div>
    <div class='item'>
        <h4><img src="./pictures/carousel6/hania.png" alt="" /></h4>
        <div className="text-center font-mont h6 fnt-bold ">Hania Amir</div>
        <div className="text-center font-mont h10">wearing our</div>
        <div className="text-center font-mont h9">Embroidered Raw Silk Suit</div>
    </div>
    <div class='item'>
        <h4><img src="./pictures/carousel6/jiya.png" alt="" /></h4>
        <div className="text-center font-mont h6 fnt-bold ">Jiya Khurram</div>
        <div className="text-center font-mont h10">wearing our</div>
        <div className="text-center font-mont h9">Embroidered Khaddi Net Suit</div>
    </div>
    <div class='item'>
        <h4><img src="./pictures/carousel6/kanza.png" alt="" /></h4>
        <div className="text-center font-mont h6 fnt-bold ">Kanza Babar</div>
        <div className="text-center font-mont h10">wearing our</div>
        <div className="text-center font-mont h9">Embroidered Dobby Suit</div>
    </div>
    <div class='item'>
        <h4><img src="./pictures/carousel6/mehvish.png" alt="" /></h4>
        <div className="text-center font-mont h6 fnt-bold ">Mehvish Ahmad</div>
        <div className="text-center font-mont h10">wearing our</div>
        <div className="text-center font-mont h9">Solid Jacquard Shirt</div>
    </div>
    <div class='item'>
        <h4><img src="./pictures/carousel6/kinza.png" alt="" /></h4>
        <div className="text-center font-mont h6 fnt-bold ">Kinza Hashmi</div>
        <div className="text-center font-mont h10">wearing our</div>
        <div className="text-center font-mont h9">Embroidered Organza Suit</div>
    </div>
    <div class='item'>
        <h4><img src="./pictures/carousel6/rija.png" alt="" /></h4>
        <div className="text-center font-mont h6 fnt-bold ">Rija Mujahid</div>
        <div className="text-center font-mont h10">wearing our</div>
        <div className="text-center font-mont h9">Embroidered Karandi Suit</div>
    </div>
</OwlCarousel>
    {/* </div> */}
    </div>
    </div>
  )
}

export default Carousel6

















