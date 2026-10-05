import axios from "axios"

const apiInstance = axios.create({
    baseURL: "https://api.kitek-pg.ru/api/feedback",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
})

const registerUser = async (user) => {
    const res = await apiInstance.post("/auth/register", user)
    return res
}

const signUser = async (user) => {
    const res = await apiInstance.post("/auth/sign", user)
    return res
}



export default api