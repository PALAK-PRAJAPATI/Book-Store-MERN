import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './AddBook.css';
import axios from "axios";
import toast from 'react-hot-toast';

const AddBook = () => {

  const user = {
    bookname:"",
    description:"",
    author:"",
    image:"",
    price:""
  }
  const[input,setInput] = useState(user);

  const getValue = (e)=>{
    const {name,value} = e.target;
    setInput({...input,[name]:value});
  }

  const submitBook = async (e) =>{
    e.preventDefault();

    await axios.post("http://localhost:8000/api/add",input)
    .then((response)=>{
      // console.log(response);
      toast.success("Book Successfully Added...",{position:"top-center"});

    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <>
  
    <div className="add-book container bg-light" style={{ minHeight: "91.5vh" }}>
      <h2 className="text-center">Add Book</h2>
      <Form onClick={submitBook}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Book Name:</Form.Label>
          <Form.Control type="text" name="bookname" placeholder="Enter Book Name" onChange={getValue} />
          <Form.Text className="text-muted">
          
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Author:</Form.Label>
          <Form.Control type="text" name="author" placeholder="Enter The Name Of Author" onChange={getValue} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description:</Form.Label>
          <Form.Control type="text" name="description" placeholder="Enter Description Of The Book" onChange={getValue} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Image:</Form.Label>
          <Form.Control type="text" name="image" placeholder="Enter The URL Of Image" onChange={getValue} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price:</Form.Label>
          <Form.Control type="number" name="price" placeholder="Enter The Price Of Book" onChange={getValue} />
        </Form.Group>

        <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit" className="col-lg-6">
                Add Book
              </Button>
            </div>
      </Form>
    </div>
    </>
  );
};

export default AddBook;
