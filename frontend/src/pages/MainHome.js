import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import Carousel2 from '../components/Carousel/Carousel2';
import Carosuel3 from '../components/Carousel/Carosuel3';
import Carousel4 from '../components/Carousel/Carousel4';
import Carousel5 from '../components/Carousel/Carousel5';
import Carousel6 from '../components/Carousel/Carousel6';
const MainHome = () => {
  return (
    <div>
      <Carousel/>
        <Carousel2/>
        <Carosuel3/>
        {/* <Carousel4/> */}
        <Carousel5/>
        <Carousel6/>
    </div>
  )
}

export default MainHome