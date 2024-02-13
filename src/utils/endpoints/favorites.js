import axios from 'axios'

const getFavorites = async () => {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        const response = await axios.get("http://localhost:3001/myfavs", config)
        const data = response.data
        return data
    } catch (err) {
        console.error(err)
    }
}

export { getFavorites }