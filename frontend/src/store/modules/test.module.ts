import { VuexModule, Module, Mutation, Action, getModule } from "vuex-module-decorators";
import { default as store } from '../index'
import axios from 'axios'
import { Inject } from "inversify-props";
import { TYPES } from "@/inversify";
import { ICoreService } from "@/services";

interface PostEntity {
    userId: number,
    id: number,
    title: string,
    body: string,
}

@Module({ dynamic: true, namespaced: true, name: 'Testowy', store })
export default class Testowy extends VuexModule {
    @Inject(TYPES.CoreService) private coreService!: ICoreService;

    posts: PostEntity[] = []

    get postsArray(): PostEntity[] {
        return this.posts;
    }

    @Mutation
    updatePosts(posts: PostEntity[]) {
        this.posts = posts;
    }

    @Action({ commit: 'updatePosts' })
    async fetchPosts() {
        return axios.get('https://jsonplaceholder.typicode.com/posts')
    }

    @Action({ commit: 'updatePosts', rawError: true })
    testAction(): PostEntity[] {
        const posts: PostEntity[] = this.coreService.getPosts();
        return posts

    }
}

export const TestowyCore = getModule(Testowy)

