import { DirectiveBinding } from "vue";

const customDirective = {
  mounted(el: HTMLElement, binding: DirectiveBinding<string>) {
    // Directive logic when element is mounted
    // Access the binding value using binding.value
    el.textContent = binding.value;
  },
  updated(el: HTMLElement, binding: DirectiveBinding<string>) {
    // Directive logic when element is updated
    el.textContent = binding.value;
  },
  unmounted(el: HTMLElement) {
    // Directive logic when element is unmounted
  },
};

export default customDirective;
