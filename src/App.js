import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route, Routes, Link } from 'react-router-dom';
import All from './All.js';
import Brand from './Brand.js'


function App() {
  return (
    <Router>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/all">All</Nav.Link>
            <Nav.Link as={Link} to="/brand">Brand</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
 <Routes>
 <Route path="/all" element={<All />} />
 <Route path="/brand" element={<Brand />} />
</Routes>
</Router>

   
  );
}

export default App;
