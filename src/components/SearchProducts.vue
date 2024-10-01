<template>
  <div class="search-products__container">
    <input
      class="search-products__input"
      v-model="valueToSearch"
      placeholder="Search"
    />
    <AppButton @click="onSearchClicked" label="Search" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useProductsStore } from "@/store/products";
import AppButton from "@/components/AppButton.vue";

const valueToSearch = ref("");
const productsStore = useProductsStore();

const onSearchClicked = () => {
  productsStore.loadProducts(valueToSearch.value);
};
</script>

<style lang="scss">
.search-products {
  &__container {
    gap: 0.25rem;
    display: flex;
    justify-content: center;
  }

  &__input {
    border: 0.0625rem solid #dcdfe3;
    border-radius: 0.125rem;
  }
}
</style>