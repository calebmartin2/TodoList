import React, { useEffect, useState } from "react";
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export function NavMenu() {
    
    const [collapsed, setCollapsed] = useState(true);


        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/">TodoList</NavbarBrand>
                        {<NavbarToggler onClick={() => setCollapsed(!collapsed)} className="mr-2" />}
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/">Current Tasks</NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/completed">Completed Tasks</NavLink>
                                </NavItem>

                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
}
