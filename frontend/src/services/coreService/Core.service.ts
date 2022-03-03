import { injectable } from "inversify-props";
import { ICoreService } from "@/services"

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

    getPosts(): [{ userId: number; id: number; title: string; body: string; }] {
        return [{
            userId: 1,
            id: 2,
            title: 'dsa',
            body: 'asd',
        }]
    }
}