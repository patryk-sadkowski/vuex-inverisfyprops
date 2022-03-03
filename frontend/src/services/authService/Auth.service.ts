import axios from "axios";
import { injectable } from "inversify-props";
import { IAuthService } from ".";

const API_URL = 'http://localhost:8080/api/auth/';

@injectable()
export default class AuthService implements IAuthService {
    async login(username: string, password: string): Promise<object> {
        return axios.post(API_URL + 'signin', {
            username,
            password,
        })
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data))
                }
                return response.data
            })
    }

    async register(username: string, email: string, password: string): Promise<object> {
        return axios.post(API_URL + 'signup', {
            username,
            email,
            password,
        })
    }

    logout(): void {
        localStorage.removeItem('user');
    }
}