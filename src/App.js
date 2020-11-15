import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (


    <Router>


      {/* Navbar with links to separate sections */}
      <div>
        <Navbar light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                
                <NavLink><a className='topNav' href='#about'>About</a></NavLink>
                
              </NavItem>
              <NavItem>
              
                <NavLink><a className='topNav' href='#projects'>Projects</a></NavLink>
              </NavItem>
              <NavItem>
                
                <NavLink><a className='topNav' href='#contact'>Contact</a></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar> </div>


      {/* Home Page with all the information */}
        <Home />

    </Router>
  )
}

export default App
