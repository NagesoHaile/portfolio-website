import React from 'react'
import Typed from 'react-typed';
import Photo from '../assets/picture.jpg';
import Image from '../assets/image.jpg';
const Header = () => {
  return (
    <div className='header'>
      <img src={Image} className="image"/>
        <div className="main-info">
              <div className="photo">
               <h1>Nageso Haile</h1>
              </div>
              {/* <img src={Photo} className="photo"/> */}
            
            <Typed 
                className='typed-text'
                strings={["Fullstack Developer","Web Developer","Mobile App Developer"]}
                typeSpeed={40}
                backSpeed={50}
                loop
            />
             <a href='#about' className='btn btn-outline-success m-5'> Read more</a>
        </div>
       
    </div>
  )
}

export default Header
