import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import logo from "../images/download.jpg";
import "../App.css";


function NavScrollExample() {
  return (
      
    <Navbar bg="danger" expand="lg">
      <Container fluid>
        <Navbar.Brand href="" className='logo'>

          <img src={logo} />



        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="navbar navbar-expand-lg"
            style={{ maxHeight: '100px' }}
            navbarScroll>


            <Nav.Link className='home'  href="/"><b>Home</b></Nav.Link>

            <br />
            <br/>
            <Nav.Link className='home' href="/Aboutus"><b>About us</b></Nav.Link>
            <br />
            
            <Nav.Link className='home' href="/Plan your Journey"><b>Plan your Journey</b></Nav.Link>

            {/* <Nav.Link className='home' href="/Our Services"><b>Our Services</b></Nav.Link> */}
            <NavDropdown  title="Routes" style={{color:'whitetext',fontSize:'25px'}}id="navbarScrollingDropdown">
           
              <NavDropdown.Item href="/Bus1">Bus1 batti chowk-morr samanabad</NavDropdown.Item>
              <NavDropdown.Item href="/Bus2">
                Bus2
              </NavDropdown.Item>
              
              <NavDropdown.Item href="/Bus3">
                Bus3
              </NavDropdown.Item>
              <NavDropdown.Item href="/Bus4">Bus4</NavDropdown.Item>
              <NavDropdown.Item href="/Bus5">Bus5</NavDropdown.Item>
              <NavDropdown.Item href="/Bus6">Bus6</NavDropdown.Item>
              <NavDropdown.Item href="/Bus7">Bus7</NavDropdown.Item>
              <NavDropdown.Item href="/Bus8">Bus8</NavDropdown.Item>
              <NavDropdown.Item href="/Bus9">Bus9</NavDropdown.Item>
              <NavDropdown.Item href="/Bus10">Bus10</NavDropdown.Item>
            

            </NavDropdown>


          </Nav>
      
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}


export default NavScrollExample;
















// import React, { useEffect } from 'react';
// import img from "../images/download.jpg"
// import { NavDropdown } from 'react-bootstrap';
// function Navbar() {
//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleScroll = () => {
//     if (window.pageYOffset > 50) {
//       document.querySelector('.nav').classList.add('affix');
//     } else {
//       document.querySelector('.nav').classList.remove('affix');
//     }
//   };

//   return (
//     <div>
//       <nav className="nav">
//         <div className="container">
//           <div className="logo">
//             <a href="#"></a>
//             <img src={img} />
//           </div>
//           <div id="mainListDiv" className="main_list">
//             <ul className="navlinks">
//               <li><a href="/">Home</a></li>
//               <li><a href="Aboutus">About us </a></li>
//               <li><a href="Plan your Journey">Plan your Journey</a></li>
//               <NavDropdown  title="Routes" style={{color:'whitetext',fontSize:'25px'}}id="navbarScrollingDropdown">
           
//            <NavDropdown.Item href="/Bus1">Bus1</NavDropdown.Item>
//            <NavDropdown.Item href="/Bus2">Bus2</NavDropdown.Item>
//            <NavDropdown.Item href="/Bus3">Bus3</NavDropdown.Item>
//            <NavDropdown.Item href="/Bus4">Bus4</NavDropdown.Item>
//            <NavDropdown.Item href="/Bus5">Bus5</NavDropdown.Item>
//            <NavDropdown.Item href="/Bus6">Bus6</NavDropdown.Item>
//            <NavDropdown.Item href="/Bus7">Bus7</NavDropdown.Item>
//            <NavDropdown.Item href="/Bus8">Bus8</NavDropdown.Item>
//            <NavDropdown.Item href="/Bus9">Bus9</NavDropdown.Item>
//            <NavDropdown.Item href="/Bus10">Bus10</NavDropdown.Item>
         

//          </NavDropdown>
           
//             </ul>


       

//           </div>
//           <span className="navTrigger">
//             <i></i>
//             <i></i>
//             <i></i>
//           </span>
//         </div>
//       </nav>

//       <section className="home"></section>
//       <div style={{ height: '1000px' }}>
       
       
//       </div>

//       <script src=""></script>
//       <script src="js/scripts.js"></script>
//     </div>
//   );
// }

// export default Navbar;

