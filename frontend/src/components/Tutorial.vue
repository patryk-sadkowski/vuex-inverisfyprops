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
import { namespace } from "s-vuex-class";
import { TYPES } from "@/inversify";
import { Inject } from 'inversify-props'
import { ICoreService } from "@/services";

const Tutorials = namespace("Tutorials");

@Options({
  name: "Tutorial",
})
export default class Tutorial extends Vue {
  @Inject(TYPES.CoreService) private coreService!: ICoreService;

  @Tutorials.State public title!: string;
  @Tutorials.Getter public titleUpperCase!: string;
  @Tutorials.Action public updateTitle!: (newTitle: string) => void;
}
</script>

<style></style>
