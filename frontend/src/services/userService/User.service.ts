import authHeader from "@/utils/AuthHeader";
import axios from "axios";
import { injectable } from "inversify-props";
import { IUserService } from ".";

const API_URL = 'http://localhost:8080/api/test/';

@injectable()
export default class UserService implements IUserService {
    getPublicContent(): Promise<object> {
        return axios.get(API_URL + 'all');
    }

    getUserBoard(): Promise<object> {
        return axios.get(API_URL + 'user', { headers: authHeader() })
    }

    getModeratorBoard(): Promise<object> {
        return axios.get(API_URL + 'mod', { headers: authHeader() })
    }

    getAdminBoard(): Promise<object> {
        return axios.get(API_URL + 'mod', { headers: authHeader() })
    }
}