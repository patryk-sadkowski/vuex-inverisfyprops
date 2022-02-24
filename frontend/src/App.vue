<template>
  <div>
    <h1>Hello Wordld</h1>
    <h2>{{ number }}</h2>
    <button @click="increase">+</button>
  </div>
</template>

script.
<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Inject from "@/testowe/Inject";
import TYPES from "./testowe/types";
import ICoreService from "./testowe/icore.service";

interface IAppData {
  number: number;
}

@Options({
  name: "App",
})
export default class App extends Vue {
  @Inject(TYPES.CoreService) private coreService!: ICoreService;

  private number = 0;

  increase() : void{
    this.number++
  }

  mounted(): void {
    console.log(this.coreService.getFile());
  }
}
</script>

<style></style>
