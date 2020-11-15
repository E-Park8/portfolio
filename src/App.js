import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
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
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                {/* <NavLink><Link to='/ericparkportfolio/'>About</Link></NavLink> */}
                <NavLink><a className='topNav' href='#about'>About</a></NavLink>
                {/* <a className="topNav" href='#about'>About</a> */}
              </NavItem>
              <NavItem>
                {/* <NavLink><Link to='/ericparkportfolio/portfolio'>Projects</Link></NavLink> */}
                <NavLink><a className='topNav' href='#projects'>Projects</a></NavLink>
              </NavItem>
              <NavItem>
                {/* <NavLink><Link to='/ericparkportfolio/contact'>Contact</Link></NavLink> */}
                <NavLink><a className='topNav' href='#contact'>Contact</a></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar> </div>


      {/* Home Page with all the information */}
        <Home />
        {/* <Switch>
          <Route exact path="/ericparkportfolio" component={Home} />
          <Route path="/ericparkportfolio/portfolio" component={Portfolio} />
          <Route path="/ericparkportfolio/contact" component={Contact} />
        </Switch> */}
     


      {/* Bottom Nav for footer..might remove */}
      {/* <footer className="fixed-bottom">     
    
      <Navbar color="dark" light expand="md">

            <Nav className="mr-auto" navbar>
              <NavItem>
                
              </NavItem>
            </Nav>
        </Navbar>

      </footer> */}

    </Router>
  )
}

export default App
