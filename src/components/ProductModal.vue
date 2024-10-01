<template>
  <div class="product-modal__overlay">
    <div class="product-modal__container">
      <div class="product-modal__container-header">
        <h1>{{ product.product }}</h1>
        <IconButton icon="close" @click="emits('close-modal')" />
      </div>
      <div class="product-modal__content">
        <img
          class="product-modal__content-image"
          :src="product.image"
          alt="no image"
        />
        <p class="product-modal__content-text">{{ product.description }}</p>
      </div>
      <AppButton
        class="product-modal__close"
        variant="secondary"
        label="Close"
        @click="emits('close-modal')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { Product } from "@/types/Products";
import IconButton from "./IconButton.vue";
import AppButton from "./AppButton.vue";

const props = defineProps<{
  product: Product;
}>();

const emits = defineEmits(["close-modal"]);
</script>

<style lang="scss">
.product-modal {
  &__overlay {
    position: fixed;
    z-index: 1;
    top: 84px;
    right: 0;
    bottom: 0;
    left: 0;

    @media screen and (min-width: 1024px) {
      position: fixed;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
    }
  }

  &__container {
    display: flex;
    flex-direction: column;

    background: rgba(255, 255, 255, 1);
    padding: 1.25rem;
    height: 100%;

    @media screen and (min-width: 1024px) {
      margin: 15% auto;
      border: 1px solid #fff;
      width: 684px;
      gap: 16px;
      height: fit-content;
      border-radius: 8px;
      padding: 2.5rem;
    }
  }

  &__container-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 2rem;

    h1 {
      font-size: medium;
      font-weight: bold;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    p {
      text-align: start;
    }

    @media screen and (min-width: 1024px) {
      display: grid;
      grid-template-columns: 50% 50%;
    }
  }

  &__content-image,
  &__content-text {
    max-height: 50%;
    @media screen and (min-width: 1024px) {
      max-width: 100%;
      max-height: unset;
    }
  }

  &__close {
    width: 100%;
    @media screen and (min-width: 1024px) {
      align-self: flex-end;
      width: fit-content;
    }
  }
}
</style>