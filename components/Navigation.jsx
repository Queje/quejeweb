import { Nav, Navbar, Container } from 'react-bootstrap';
import Link from 'next/link'
import ImageComponent from './ImageComponent';
import logo from '../assets/QJW.svg'

const Navigation = () => (
	<Navbar collapseOnSelect expand='lg' className="navbar-dark mt-1">
		<Container>
			<Link className="navbar-brand" passHref href="/">
				<ImageComponent {...logo}/>
			</Link>
			
			<Navbar.Toggle 
				aria-controls="navbarTogglerDemo02" 
				/>

			<Navbar.Collapse id="navbarTogglerDemo02">
				<Nav className="m-auto">
					<Nav.Link className="m-auto" href="/"> Tarifs </Nav.Link>
					<Nav.Link className="m-auto" href="/"> Contact </Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Container>
	</Navbar>
);

export default Navigation;
