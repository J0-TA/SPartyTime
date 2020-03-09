import axios from "axios";

export default class PartyService {
    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/parties`,
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

    updateParty = () => {
        return this.service.put('/:id', )
        .then(response => response.data)
    }

    deleteParty = (id) => {
        return this.service.delete('/' + id, )
        .then(response => response.data)
    }
}