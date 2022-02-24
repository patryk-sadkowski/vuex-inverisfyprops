import { Container } from "inversify";
import CoreService from "./testowe/core.service";
import ICoreService from "./testowe/icore.service";
import TYPES from "./testowe/types";



export let container: Container;

export function containerBuild(): Container {
    container = new Container()

    container.bind<ICoreService>(TYPES.CoreService).to(CoreService).inSingletonScope();

    return container
}