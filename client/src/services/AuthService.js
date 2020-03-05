import axios from "axios";

export default class AuthService {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/auth`,
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