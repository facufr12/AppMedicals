// import node module libraries
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Image, Navbar, Nav, Container } from 'react-bootstrap';

// import sub components
import DocumentMenu from '../DocumentMenu';
import NavMegaDropdown from './NavMegaDropdown';
import MegaMenu from './MegaMenu';
import CategoriesDropDown from './CategoriesDropDown';
import DarkLightMode from 'layouts/DarkLightMode';

// import media files

// import data files

const NavbarMegaMenu = () => {
	const [expandedMenu, setExpandedMenu] = useState(false);

	return (
		<Fragment>
			<Navbar
				onToggle={(collapsed) => setExpandedMenu(collapsed)}
				expanded={expandedMenu}
				expand="lg"
				className="navbar-default"
			>
				<Container fluid className="px-0 ps-2">
					<div className="d-flex">
						<Navbar.Brand as={Link} to="/">
							<Image src={Logo} alt="" />
						</Navbar.Brand>
						<CategoriesDropDown />
					</div>

					<Navbar.Toggle aria-controls="basic-navbar-nav">
						<span className="icon-bar top-bar mt-0"></span>
						<span className="icon-bar middle-bar"></span>
						<span className="icon-bar bottom-bar"></span>
					</Navbar.Toggle>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							{NavbarDefaultRoutes.slice(1, 100).map((item, index) => {
								if (item.children === undefined) {
									return (
										<Nav.Link key={index} as={Link} to={item.link}>
											{item.menuitem}
										</Nav.Link>
									);
								} else {
									return (
										<NavMegaDropdown
											item={item}
											key={index}
											onClick={(value) => setExpandedMenu(value)}
										/>
									);
								}
							})}
							<MegaMenu />
							<DocumentMenu />
						</Nav>

						{/* Right side quick / shortcut menu  */}
						<div className="ms-auto mt-3 mt-lg-0">
							<div className="d-flex align-items-center">
								<DarkLightMode />
								<Link to="#" className="btn btn-outline-dark ms-3">
									Sign in
								</Link>
								<Link to="#" className="btn btn-dark ms-1">
									Sign up
								</Link>
							</div>
						</div>
						{/* end of right side quick / shortcut menu  */}
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Fragment>
	);
};


export default NavbarMegaMenu;
