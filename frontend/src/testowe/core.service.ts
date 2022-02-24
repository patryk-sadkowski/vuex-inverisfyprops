import { injectable } from "inversify";
import ICoreService from "./icore.service";

@injectable()
export default class CoreService implements ICoreService {


    getFile() {
        return {
            name: 'Lorem Ipsum'
        }
    }

    logger(): void {
        console.log('Testowe');

    }
}