export default interface ICoreService {
    logger(): void;
    getFile(): {
        name: string,
    };
    getPosts(): {
        userId: number,
        id: number,
        title: string,
        body: string,
    }[]
}