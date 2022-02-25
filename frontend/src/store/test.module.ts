import { VuexModule, Mutation, Action } from "vuex-module-decorators";
import axios from 'axios'

interface PostEntity {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export default class Testowy extends VuexModule {
    posts: PostEntity[] = []

    get postsArray() : PostEntity[] {
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
}