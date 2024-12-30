import React from "react";
import "./App.css";  // You can style your homepage here
import Carousel from 'react-bootstrap/Carousel'

import Button from '@mui/material/Button';


// Homepage component
function Homepage() {

   
return (
  
  
    <div className="homepage">
         
         <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 img-1"
          src="https://images.pexels.com/photos/8217430/pexels-photo-8217430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2?text=First slide&bg=f5f5f5" 
          alt="First slide"
        />
        <Carousel.Caption>
          
         {/* <button >Shop Now</button> */}
         
         <Button variant="contained" color="primary">
        Shop Now
      </Button>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-1"
          src="https://images.pexels.com/photos/19871489/pexels-photo-19871489/free-photo-of-close-up-of-two-mens-smart-watches.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Second slide"
        />
        <Carousel.Caption>
        <Button variant="contained" color="primary">
        Shop Now
      </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-1"
          src="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
        <Button variant="contained" color="primary">
        Shop Now
      </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    


      
    </div>
    
   
  );
}

export default Homepage;



