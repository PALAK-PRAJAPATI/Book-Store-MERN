import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';

const ViewMore = () => {



    const id = useParams().id;
    const [book,setBook] = useState([]);

    useEffect(()=>{
        console.log(`inside useEffect${id}`)
        axios.get(`http://localhost:8000/api/getone/${id}`)
        .then((response)=>{
            setBook(response.data)
            // console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])

  return (
    <>
         <div className="d-flex justify-content-center align-item-center  m-3">
        <h4>Book Details</h4>
      </div>
        <div>
              <div className="card" style={{ width: "100%", height: "fit-content", margin: "10px 0" }} key={book._id}>
              <div className="book-img">
                <img style={{ width: "200px", height: "320px" }} className="img-fuild" src={book.image} alt="/" />
              </div>
              <div className="details px-2">
                <h5>{book.bookname}</h5>
                <p className="dark">Book Autor: <b>{book.author}</b></p>
                <b style={{fontSize:"1.3rem"}}><i className="fa-solid fa-indian-rupee-sign mx-2 m-3" style={{color:"red"}}>{book.price}</i></b>

                  <p>{book.description}</p>

                {/* <div className="delivery-data">FREE Delivery over ₹499. Fulfilled by</div> */}
              </div>
          </div>
    </div>
    </>

  )
}

export default ViewMore
