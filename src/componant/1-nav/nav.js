import React, { Fragment, useEffect, useState } from "react";
import "./nav.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { getActiveElement } from "@testing-library/user-event/dist/utils";
const Navs = () =>{
  // let [mood , setmood] = useState("light");
  // useEffect(() => {
  //   document.body.classList.toggle(mood);
  //     // if(mood === "light"){
  //     //   document.body.classList.remove("light")
  //     //   document.body.classList.add("dark");
  //     // }else{
  //     //   document.body.classList.remove("dark")
  //     //   document.body.classList.add("light");
  //     // }
  // } , [mood])
  // const [mood , setmood] = useState("dark");
  // useEffect(
  //   ()=>{
  //       if(mood == "light"){
  //         document.body.classList.add(mood);
  //         setmood("light");
  //       }
  //   }
  // ,[mood]);


    return(
        <div>


    <Navbar expand="md" className=" cont2">
      <Container>
        <Navbar.Brand  href="#home"><sup>7</sup>matrex</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">about</Nav.Link>
            <Nav.Link href="#home">article</Nav.Link>
            <Nav.Link href="#home">projects</Nav.Link>
            <Nav.Link href="#link">speaking</Nav.Link>
            <Nav.Link href="#link">contact</Nav.Link>
            <NavDropdown title="my skills" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">html </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">css </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">javascript </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">jquery </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">bootstrap </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1">back end basics </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {/* the button  */}
          
      </Container>
    </Navbar>
     

      

        


        </div>
    );
}

export default Navs;

// onClick={() =>{
//   if(mood ==="light"){
//     setmood("dark")
//   }
// }} 