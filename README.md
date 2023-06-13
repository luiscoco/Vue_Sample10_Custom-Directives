# custom-directives

In Vue 3, custom directives allow you to extend the functionality of HTML elements or components. They are defined and used in templates to modify the behavior of the elements they are attached to. Directives are primarily used for manipulating the DOM, but they can also be used to add interactivity or apply animations.

## main.ts
Define the custom directive in the main.ts file:

```vue
import { createApp } from "vue";
import App from "./App.vue";
import customDirective from "./directives/customDirective";

const app = createApp(App);
app.directive("custom", customDirective);
app.mount("#app");
```

## App.vue
Include the custom directive keyword "v-custom" in the template:

```vue
<template>
  <div v-custom="myValue">Luis Directive Example</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import customDirective from "./directives/customDirective";

const myValue = ref("Hello, World!");
</script>
```

## CustomDirective.ts

```vue
import { DirectiveBinding } from "vue";

const customDirective = {
  mounted(el: HTMLElement, binding: DirectiveBinding<string>) {
    // Directive logic when element is mounted
    // Access the binding value using binding.value
    el.textContent = binding.value;
    console.log("Message from the mounted hook");
  },
  updated(el: HTMLElement, binding: DirectiveBinding<string>) {
    // Directive logic when element is updated
    el.textContent = binding.value;
    console.log("Message from the updated hook");
  },
  unmounted(el: HTMLElement) {
    // Directive logic when element is unmounted
    console.log("Message from the unmounted hook");
  },
};

export default customDirective;
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
