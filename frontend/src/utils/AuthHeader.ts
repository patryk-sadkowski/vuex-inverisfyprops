import { AxiosResponseHeaders } from "axios";

export default function authHeader(): AxiosResponseHeaders {
    const storeUser = localStorage.getItem('user');
    const user = JSON.parse(storeUser ? storeUser : "");

    if (user && user.accessToken) {
        return {
            'x-access-token': user.accessToken,
        }
    } else {
        return {}
    }
}