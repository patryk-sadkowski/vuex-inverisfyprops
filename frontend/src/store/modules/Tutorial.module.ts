import { Inject } from 'inversify-props';
import { TYPES } from '@/main.containers';
import IKanyeWestService from '@/services/kanyeWestService/IKanyeWest.service';
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

@Module({ namespaced: true })
class Tutorial extends VuexModule {
    @Inject(TYPES.KanyeWestService) kanyeWestService!: IKanyeWestService;

    public title = 'Lorem Ipsum Dolor';
    @Mutation
    public setTitle(newTitle: string): void {
        this.title = newTitle;
    }
    @Action
    public updateTitle(newTitle: string): void {
        this.context.commit('setTitle', newTitle);
    }
    get titleUpperCase(): string {
        return this.title.toUpperCase();
    }
}
export default Tutorial;
