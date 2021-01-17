import {config} from "../util/config";
import axios from "axios";

export default class OrderService {
    add(order) {
        const requestOptions = {
            url: `${config.apiUrl}/orders`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("user"))?.token
            },
            data: order
        };
        return axios(requestOptions)
            .then(response => {
                return response.data;
            });
    }

    findAll() {
        const requestOptions = {
            url: `${config.apiUrl}/orders`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("user"))?.token
            },
        };
        return axios(requestOptions)
            .then(response => {
                return response.data;
            });
    }
}
