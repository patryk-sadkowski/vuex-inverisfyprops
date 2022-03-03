import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'

@Module({ namespaced: true })
export default class Tutorials extends VuexModule {
    public title!: string;

    @Mutation
    public setTitle(newTitle: string): void {
        this.title = newTitle;
    }

    
    @Action({ commit: 'setTitle' })
    public updateTitle(newTitle: string): void {
        this.context.commit('setTitle', newTitle);
    }

    get titleUpperCase(): string {
        return this.title.toUpperCase();
    }

}