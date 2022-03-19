<template>
  <div>
    <h1>Hello World</h1>
    <h2>{{ titleUpperCase }}</h2>
    <button @click="changeTitle">click</button>
  </div>
</template>

script.
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { namespace } from "s-vuex-class";
import { Inject } from "inversify-props";
import { TYPES } from "./main.containers";
import IKanyeWestService from "./services/kanyeWestService/IKanyeWest.service";
import KanyeQuote from "./models/KanyeQuote";

const Tutorial = namespace("Tutorial");

@Options({
  name: "App",
})
export default class App extends Vue {
  @Tutorial.State
  public title!: string;
  @Tutorial.Getter
  public titleUpperCase!: string;
  @Tutorial.Action
  public updateTitle!: (newTitle: string) => void;

  changeTitle():void {
    this.updateTitle('dsa');
  }
}
</script>

<style></style>
