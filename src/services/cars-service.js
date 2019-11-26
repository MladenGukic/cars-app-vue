import axios from 'axios';

export default class CarsService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/'
    }

    getCars() {
        return axios.get("/api/cars")
    }

    // deleteCar(id) {
    //     return axios.delete('' + id)
    // }
}

export const  carsService = new CarsService()