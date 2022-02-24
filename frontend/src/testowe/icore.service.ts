export default interface ICoreService {
    logger(): void;
    getFile(): {
        name: string,
    };
}