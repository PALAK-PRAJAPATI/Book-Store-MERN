import React from 'react';
import { Link } from "react-router-dom"; 
import './Home.css'

const Home = () => {
  return (
    <>
    
    <div className='Home-page bg-light text-black container-fluid'>
      <div className="row container">
        <div className='col-lg-6 d-flex justify-content-center align-items-start flex-column' style={{height:"91.5vh"}}>
            <h2 style={{fontSize:"80px",color: "#636cff"}}>BOOK STORE </h2>
            <p style={{color:"grey"}}>Checkout The Books From Here</p>
            <Link to={"/book"} className='view-book'>View Books</Link>
        </div>

        <div className='col-lg-6 d-flex justify-content-center align-items-center flex-column' style={{height:"91.5vh"}}>
           <img className='img-fluid' src="/Books-image.png" alt="Books" style={{width:"480px", height:"350px"}}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
