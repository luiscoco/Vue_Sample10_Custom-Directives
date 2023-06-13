<template>
  <div v-custom="myValue">Luis Directive Example</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import customDirective from "./directives/customDirective";

const myValue = ref("Hello, World!");
</script>
