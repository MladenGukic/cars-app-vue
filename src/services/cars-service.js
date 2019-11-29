import axios from 'axios';

export default class CarsService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }

    getCars() {
        return axios.get("cars")
    }

    addCar(car) {

      return  axios.post("cars", car)

    }

    get(id) {
        return axios.get("cars/" + id)
    }

    deleteCar(id) {
        return axios.delete('cars/' + id)
    }

    edit(id, car) {
        return axios.put('cars/' + id, car)
    }
}

export const  carsService = new CarsService()