import React from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
	const [navOpen, setNavOpen] = React.useState(false)

	const toggleNav = () => {
		setNavOpen(!navOpen)
	}

	return (
		<Navbar color="white" light expand="md">
			<NavbarBrand href="/">
				<img src="./mawingu.png" style={{ maxWidth: 40 }} alt="Mawingu Logo" />
			</NavbarBrand>
			<NavbarToggler onClick={toggleNav} />
			<Collapse isOpen={navOpen} navbar>
				<Nav className="ml-auto" navbar>
					<UncontrolledDropdown nav inNavbar>
						<DropdownToggle nav caret style={{ color: '#007bff' }}>
							<FontAwesomeIcon icon="user" style={{ marginRight: 5 }} />
							Alvaro
						</DropdownToggle>
						<DropdownMenu right>
							<DropdownItem>Change Password</DropdownItem>
							<DropdownItem>Logout</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>
				</Nav>
			</Collapse>
		</Navbar>
	)
}

export default Header
