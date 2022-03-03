export default interface IUserService {
    getPublicContent() : Promise<object>
    getUserBoard() : Promise<object>
    getModeratorBoard() : Promise<object>
    getAdminBoard(): Promise<object>
}