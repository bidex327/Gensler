




// const api = axios.create({
    //     baseURL: "http://localhost:5000/api",
    //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": "application/json"
        //     }
        // })
        
        import axios from "axios";

const api = axios.create({
    baseURL: "https://gensler-backend.vercel.app/api",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
});
export default api;