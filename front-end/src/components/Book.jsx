import React, { useEffect, useState } from "react";
import axios from "axios";
import BookSection from "./BookSection.jsx";
import "./Book.css";

const Book = () => {
  const [data, setData] = useState([]);

  const fetch = async () => {
    await axios
      .get("http://localhost:8000/api/getall")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetch();
  },[]);


  const search =(e)=>{
      const searchBook = e.target.value;
      if(searchBook){
       const result = data.filter((book)=>book.bookname.toLowerCase().includes(searchBook))
        setData(result);
      }
      else{
        fetch();
      }
  }

  return (
    <>


    <div className="bg-light" style={{ minHeight: "91.5vh" }}>
      <div className="d-flex justify-content-center align-item-center py-3">
        <h4>Book Section</h4>
      </div>
        <div className="search-book">
        <i className="icon fa-solid fa-magnifying-glass"></i><input type="text" placeholder="Search Book" className="input-search"  onChange={search}/>
        </div>
      {
          <div>
              <BookSection data={data}/>
              {data.length === 0 && <h4 className="text-center">No Results Found</h4>}
          </div>
        
      }
    </div>
  </>
  );

};

export default Book;
