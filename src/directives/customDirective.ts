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
