import React from 'react'
import Typed from 'react-typed';
import Photo from '../assets/picture.jpg';

const Header = () => {
  return (
    <div className='header'>
        <div className="main-info">
              <img src={Photo} className="photo"/>
            <h1>Nageso Haile</h1>
            <Typed 
                className='typed-text'
                strings={["Fullstack Developer","Web Developer","Mobile App Developer"]}
                typeSpeed={40}
                backSpeed={50}
                loop
            />
             <a href='#about' className='btn btn-outline-warning m-5'> Read more</a>
        </div>
       
    </div>
  )
}

export default Header
