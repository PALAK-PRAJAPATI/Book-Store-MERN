import {React} from "react";
import { Link } from "react-router-dom";
import "./BookSection.css";
import axios from "axios";
import toast from "react-hot-toast";


const BookSection = ({ data }) => {
  console.log(data);

  // const [showFullDescription, setShowFullDescription] = useState(false); // Track read more status

const deleteBook = async(bookID)=>{
    await axios.delete(`http://localhost:8000/api/delete/${bookID}`)
    .then((response)=>{
        toast.success("Book Deleted Successfully...",{position:"top-center"})
    })
    .catch((error)=>{
      console.log(error);
    })
  }


  // Handle read more/read less toggle
  // const toggleDescription = () => {
  //   setShowFullDescription(!showFullDescription);
  // };




  return (
 
    
    <div className="d-flex  justify-content-between align-items-center flex-wrap">
      {data &&
        data.map((item, index) => {
          return (
            <div className="card" style={{ width: "100%", height: "fit-content", margin: "10px 0" }} key={item._id}>
              <div className="book-img">
                <img style={{ width: "200px", height: "320px" }} className="img-fuild" src={item.image} alt="/" />
              </div>
              <div className="details px-2">
                <h5>{item.bookname}</h5>
                <p className="dark">Book Autor: <b>{item.author}</b></p>
                <b style={{fontSize:"1.3rem"}}>Price:<i class="fa-solid fa-indian-rupee-sign mx-2">{item.price}</i></b>

                  <p>{item.description.slice(0,150)+'.....'}<Link className="text-blue" to={`/viewmore/` + item._id}>View More</Link></p>
                {/* <div>
                  {
                    showFullDescription ? ( <span>{item.description}</span> ) :
                    ( <span>{item.description.slice(0,120)+'.....'}</span>)
                  }
                  <span style={{ color: 'blue', cursor: 'pointer' }} onClick={toggleDescription}>
                    {showFullDescription ? '...Read Less' : 'Read More'}
                  </span>
                </div> */}

                <div className="delivery-data">FREE Delivery over ₹499. Fulfilled by</div>
                <div className="buttons">
                    <Link to={`/updatebook/` + item._id} className="btn btn-success">Update</Link>
                    <button  onClick={()=>{deleteBook(item._id)}} className="btn btn-danger">Delete</button>
                </div>
              </div>
          </div>
          );
        })}
              
    </div>
   
 );
};

export default BookSection;
