import axios from "axios";

export default class AuthService {
    constructor() {
        this.service = axios.create({
            baseURL: `https://spartytime.herokuapp.com/api/auth`,
            withCredentials: true
        });
    }

    loggedin = () => {
        return this.service.get('/currentUser', )
            .then(response => response.data)
    };

    logout = () => {
        return this.service.get('/logout', )
            .then(response => response.data)
    };
};