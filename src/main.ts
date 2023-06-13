import { createApp } from "vue";
import App from "./App.vue";
import customDirective from "./directives/customDirective";

const app = createApp(App);
app.directive("custom", customDirective);
app.mount("#app");
