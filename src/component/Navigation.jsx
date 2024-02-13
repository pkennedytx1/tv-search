import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { handleLogout } from '../utils/endpoints/auth';
import Auth from '../containers/Auth';

export default function Navigation() {
    const navigate = useNavigate()
    const logout = async () => {
        await handleLogout()
        navigate("/auth")
    }
    return(
        <Navbar data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/" href="#home">TV Search</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {localStorage.getItem('token') ?
                        <>
                            <Nav.Link as={Link} to="/favorites">
                                My Favorites
                            </Nav.Link>
                            <Nav.Link as={Link} to="/watch_later">
                                Watch Later
                            </Nav.Link>
                            <Nav.Link as={Button} onClick={() => logout()}>
                                Log Out
                            </Nav.Link>
                        </> :
                        <Nav.Link as={Link} to="/auth">
                            Login/Sign Up
                        </Nav.Link>
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}