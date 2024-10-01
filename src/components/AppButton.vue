<template>
  <button :class="`app-button ${styleClass}`">{{ label }}</button>
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "primary",
  },
  label: String,
});

const styleClass = computed(() => `app-button__${props.variant}`);
</script>


<style lang="scss">
.app-button {
  border-radius: 0.25rem;
  border-color: transparent;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  width: fit-content;

  &__primary {
    background: #605dec;
    color: white;
  }

  &__secondary {
    background: #f9f9fb;
    color: #000000;
  }
}
</style>