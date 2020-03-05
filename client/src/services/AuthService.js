import axios from "axios";

export default class AuthService {
    constructor() {
        this.service = axios.create({
            baseURL: `http://localhost:4000/api/auth`,
            withCredentials: true
        });
    }

    login = () => {
        return this.service.get('/spotify', )
            .then(response => response.data)
    };

    loggedin = () => {
        return this.service.get('/currentUser', )
            .then(response => response.data)
    };

    logout = () => {
        return this.service.get('/logout', )
            .then(response => response.data)
    };
};