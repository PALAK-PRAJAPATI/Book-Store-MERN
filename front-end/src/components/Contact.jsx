import React, {  useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import toast from 'react-hot-toast';

const Contact = () => {

  const user = {
    fname :"",
    lname :"",
    email :"",
    phone :"",
    message :""
  }

  const [input,setInput] = useState(user);
  console.log(input)

  const getValue = (e)=>{
    const {name,value} = e.target;
    setInput({...input,[name]:value})
  }


const submitData = async (e)=>{
  e.preventDefault();
  await axios.post("http://localhost:8000/api/contact",input)
  .then((response)=>{
    // console.log(response);
    toast.success("Your Request Accepted Successfully...",{position:"top-center"})
  })
  .catch((error)=>{
    console.log(error);
  })

}


  return (
    <>
   
      <div className="container mb-3 contact">
        <h2 className="text-center mt-3">Contact US</h2>
        <div className="container mt-2">
          <Form className="row mt-5" onSubmit={submitData}>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>First Name:</Form.Label>
              <Form.Control type="text" name="fname" placeholder="Enter FName" onChange={getValue} />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Last Name:</Form.Label>
              <Form.Control type="text" name="lname" placeholder="Enter LName" onChange={getValue} />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter Email" onChange={getValue} />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Phone:</Form.Label>
              <Form.Control type="text" name="phone" placeholder="Enter Phone" onChange={getValue} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" rows={4} name="message" placeholder="Enter Your Message" onChange={getValue}/>
            </Form.Group>

            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit" className="col-lg-6">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Contact;
