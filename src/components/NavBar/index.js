import Navbar from 'react-bootstrap/Navbar';
import Navigation from '../Navigation';

const NavBar = () => {
	return (
	    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
	    <Navigation />
        </Navbar>
	)
}

export default NavBar;