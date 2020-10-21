import {config} from "../../../util/config";
import axios from "axios";
import {RegistrationInfo} from "../../../model/registration.info";
import {UserService} from "../definition/user.service";

export class UserServiceReal extends UserService {
    login(email, password) {
        const requestOptions = {
            url: `${config.apiUrl}/authenticate`,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: { "email": email,"password":password }
        };
        return axios(requestOptions)
            .then(response => {
                return response.data;
            });
    }
    register(user){
/*        const registrationInfo = new RegistrationInfo(
            user.firstName,
            user.lastName,
            user.company,
            user.username,
            user.password,
            user.phone,
            user.offerCode,
            user.country
        );*/
        const data = user;// registrationInfo.getRequestBody();
        const requestOptions = {
            url: `${config.apiUrl}/profile`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
        return axios(requestOptions)
            .then(response => {
                return response.data;
            });
    }
    logout(token) {
        localStorage.removeItem('user');
    }
}
