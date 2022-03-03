export default interface IAuthService {
    login(username: string, password: string): Promise<object>
    register(username: string, email: string, password: string): Promise<object>
    logout(): void
}