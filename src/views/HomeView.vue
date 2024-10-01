<template>
  <AppHeader />
  <div class="home">
    <ProductsTable />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "@/components/AppHeader.vue";
import ProductsTable from "@/contents/ProductsTable.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    AppHeader,
    ProductsTable,
  },
});
</script>

<style lang="scss">
.home {
  display: flex;
  justify-content: center;
}
</style>