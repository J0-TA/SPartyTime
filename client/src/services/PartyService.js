import axios from "axios";

export default class PartyService {
    constructor() {
        this.service = axios.create({
            baseURL: `https://spartytime.herokuapp.com/api/parties`,
            withCredentials: true
        });
    }
    getAllParties = () => {
        return this.service.get('/all', )
        .then(response => response.data)
    };

    getPartyDetails = (id) => {
        return this.service.get('/' + id, )
        .then(response => response.data)
    };

    createParty = (party) => {
        return this.service.post('/create', party)
        .then(response => response.data)
    }

    updateParty = (id, party) => {
        return this.service.put('/' + id, party)
        .then(response => response.data)
    }

    deleteParty = (id) => {
        return this.service.delete('/' + id, )
        .then(response => response.data)
    }
}