import { Container, container } from "inversify-props";
import { coreService, ICoreService } from "@/services";
import { TYPES } from '@/inversify'

export function containerBuild(): Container {

    container.addSingleton<ICoreService>(coreService, TYPES.CoreService);
    
    
    return container
}