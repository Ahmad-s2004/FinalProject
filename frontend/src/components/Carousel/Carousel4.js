import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Carousel4 = () => {

    const [data, setData] = useState([])

    const userData = async () => {
        let res = await fetch("http://localhost:4000/api/v3/auth/data/women")
        res = await res.json()
        setData(res)
        userData()
    }

    useEffect(() => {
        userData()
    }, [])

    const options = {
        items:12,
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
            <OwlCarousel className='owl-theme' loop margin={10} {...options}>
                {
                    data.map(x => {
                        return (
                            <>
                                <div class='item'>
                                    <h4> <img src={`http://localhost:4000/api/v3/auth/${x.img}`} className="card-img-tops" alt="sas" /></h4>
                                    <h6 className='fnt-mont fw-6'>{x.title}</h6>
                                    <div className="fw-6 fnt-mont">Rs.{x.price}</div>
                                </div>
                                
                            </>
                        )
                    })
                }
                {/* <div class='item'>
                    <h4> <img src={`http://localhost:4000/api/v3/auth/${x.img}`} className="card-img-top" alt="sas" /></h4>
                </div>
                <div class='item'>
                    <h4><img src="./pictures/carousel3/men.png" alt="" /></h4>
                </div>
                <div class='item'>
                    <h4><img src="./pictures/carousel3/men.png" alt="" /></h4>
                </div>
                <div class='item'>
                    <h4><img src="./pictures/carousel3/men.png" alt="" /></h4>
                </div>
                <div class='item'>
                    <h4><img src="./pictures/carousel3/men.png" alt="" /></h4>
                </div>
                <div class='item'>
                    <h4><img src="./pictures/carousel3/men.png" alt="" /></h4>
                </div>
                <div class='item'>
                    <h4><img src="./pictures/carousel3/men.png" alt="" /></h4>
                </div>
                <div class='item'>
                    <h4><img src="./pictures/carousel3/men.png" alt="" /></h4>
                </div>
                <div class='item'>
                    <h4><img src="./pictures/carousel3/men.png" alt="" /></h4>
                </div>
                <div class='item'>
                    <h4><img src="./pictures/carousel3/men.png" alt="" /></h4>
                </div>
                <div class='item'>
                    <h4><img src="./pictures/carousel3/men.png" alt="" /></h4>
                </div>
                <div class='item'>
                    <h4><img src="./pictures/carousel3/men.png" alt="" /></h4>
                </div> */}
            </OwlCarousel>;
        </div>
    )
}

export default Carousel4