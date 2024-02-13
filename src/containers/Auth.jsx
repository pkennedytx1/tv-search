import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { handleSignup, handleLogin } from '../utils/endpoints/auth'
import { useNavigate } from 'react-router-dom'

export default function Auth() {
    const navigate = useNavigate()
    const [showSignup, setShowSignup] = useState(false)

    const handleSignUp = async (signupData) => {
        const response = await handleSignup(signupData)
        if (response) {
            navigate("/")
        }
    }

    const handleUserLogin = async (userData) => {
        const response = await handleLogin(userData)
        if (response) {
            navigate("/")
        }
    }
    return(
        <>
        {showSignup ?
            <div style={{ margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 56px)' }}>  
                <Form>
                <h1 style={{ margin: '0 auto' }} >Sign Up</h1>
                    <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control id="name" name="name" type="text" placeholder="Enter Full Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control id="username" name="username" type="text" placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control id="email" name="email" type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control id="password" name="password" type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" onClick={(e) => {
                        const signupData = {
                            name: document.getElementById("name").value,
                            username: document.getElementById("username").value,
                            email: document.getElementById("email").value,
                            password: document.getElementById("password").value
                        }
                        handleSignUp(signupData)
                    }}>
                        Sign Up
                    </Button>
                    <Button onClick={() => setShowSignup(false)} variant="link">
                        Already have an account?
                    </Button>
                </Form>
            </div>
        :
            <div style={{ margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>  
                <Form>
                <h1 style={{ margin: '0 auto' }} >Login</h1>
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control id="username" type="text" placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control id="password" type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" onClick={() => {
                        const loginData = {
                            username: document.getElementById("username").value,
                            password: document.getElementById("password").value
                        }
                        handleUserLogin(loginData)
                    }}>
                        Login
                    </Button>
                    <Button onClick={() => setShowSignup(true)} variant="link">
                        Need an account? Sign up here!
                    </Button>
                </Form>
            </div>
        }
        </>
    )
}