import axios from 'axios'

const handleSignup = async (user) => {
    try {
        const response = await axios.post("http://localhost:3001/signup", {
            user
        })
        if (response.data.token) {
            localStorage.setItem("token", response.data.token)
            return true
        }
        return false
    } catch (err) {
        console.error(err)
        return false
    }
}

const handleLogin = async (user) => {
    try {
        const response = await axios.post("http://localhost:3001/login", {
            user
        })
        if (response.data.token) {
            localStorage.setItem("token", response.data.token)
            return true
        }
        return false
    } catch (err) {
        console.error(err)
        return false
    }
}

const handleLogout = async () => {
    localStorage.removeItem('token')
}

export { handleSignup, handleLogout, handleLogin }