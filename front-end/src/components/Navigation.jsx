import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";


const Navigation = () => {

  // common variable style for navigation link.
  const common ={
    marginRight : 15,
    fontSize : 20,
    letterSpacing: ".5px",
    color: "white"
  
  }

  return (
    <div>
      
        <Navbar bg="dark" data-bs-theme="dark" expand="sm" collapseOnSelect>
        <Container>
          <div>
            <h2 className="mt-2 header-name" style={{ color: "white" }}>
              Books Store
            </h2>
          </div>

          <Nav className="">
            <div className="mt-2">
              <Link to="/" className="text-decoration-none" style={common}>Home</Link>
              <Link to="/book" className="text-decoration-none" style={common}>Book</Link>
              <Link to="/addbook" className="text-decoration-none" style={common}>Add Book</Link>
              <Link to="/contact" className="text-decoration-none" style={common}>Contact US</Link>
            </div>
            <div>
           
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation
