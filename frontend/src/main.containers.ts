import { Container, container } from "inversify-props";
import IKanyeWestService from "./services/kanyeWestService/IKanyeWest.service";
import KanyeWestService from "./services/kanyeWestService/KanyeWest.service";

function containerBuild(): Container {

    container.addSingleton<IKanyeWestService>(KanyeWestService, TYPES.KanyeWestService);
    
    
    return container
}

const TYPES = {
    KanyeWestService: Symbol.for("kanyeWestService")
}


export {
    containerBuild,
    TYPES
};

