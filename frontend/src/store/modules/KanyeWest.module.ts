import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { Inject } from 'inversify-props'
import KanyeQuote from '@/models/KanyeQuote'
import IKanyeWestService from '@/services/kanyeWestService/IKanyeWest.service'
import { TYPES } from '@/main.containers'

@Module({ namespaced: true, name: 'KanyeWest' })
export default class KanyeWest extends VuexModule {
    @Inject(TYPES.KanyeWestService) private kanyeWestService!: IKanyeWestService

    public kanyeQuote: KanyeQuote | null = null

    @Action
    public async fetchKanyeQuote(): Promise<void> {
        try {
            const kanyeQuote = await this.kanyeWestService.getQuote()
            this.context.commit('setKanyeQuote', kanyeQuote)
        } catch (error) {
            console.error(error)
        }
    }

    @Mutation
    public setKanyeQuote(newKanyeQuote: KanyeQuote): void {
        this.kanyeQuote = newKanyeQuote
    }

    get quote(): string {
        return this.kanyeQuote !== null ? this.kanyeQuote.quote : ''
    }
}