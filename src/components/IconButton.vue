<template>
  <button class="hamburguer-button__button">
    <img :src="getImgPath" />
    {{ label }}
  </button>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  icon: String,
  label: {
    required: false,
    type: String,
  },
});

const getImgPath = computed(() => {
  return require(`@/assets/icons/${props.icon}.svg`);
});
</script>

<style lang="scss">
.hamburguer-button {
  &__button {
    height: 2rem;
    line-height: 2rem;
    padding: 0.125rem;
    text-align: center;
    background: transparent;
    border: none;
    cursor: pointer;
    width: fit-content;
    color: #605dec;

    img {
      vertical-align: middle;
    }
  }

  &__button:hover {
    background-color: #edede4;
    border-radius: 0.125rem;
  }
}
</style>
