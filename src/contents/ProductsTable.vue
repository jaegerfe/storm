<template>
  <div>
    <div class="products-table__header">
      <b>Products</b> {{ products.length }} of {{ total }}
    </div>
    <ContentTable
      :header-options="headerOptions"
      :content="productsContent"
      @row-click="onRowClicked"
      @sort="onSort"
    />
    <ProductModal
      v-if="showProductModal"
      :product="selectedProduct"
      @close-modal="closeProductModal"
    />
  </div>
</template>

<script lang="ts" setup>
import { useProductsStore } from "@/store/products";
import { computed, onMounted, ref } from "vue";
import ProductModal from "@/components/ProductModal.vue";
import { TableRowItem } from "@/types/Table";
import { Product } from "@/types/Products";
import ContentTable from "@/components/table/ContentTable.vue";

const headerOptions = [
  { title: "ID", field: "id" },
  { title: "Status", field: "status" },
  { title: "Quantity", field: "quantity" },
  { title: "Product name", field: "product" },
  { title: "Prices", field: "total" },
];

const productsStore = useProductsStore();

const showProductModal = ref(false);
const selectedProduct = ref<null | Product>(null);

const products = computed(() => productsStore.productsList);
const total = computed(() => productsStore.total);

const productsContent = computed(() => {
  return products.value.map(
    (product): TableRowItem => ({
      rows: [
        { value: product.id },
        { value: product.status ?? "Pending" },
        { value: product.quantity },
        { value: product.product },
        { value: product.total },
      ],
    })
  );
});

onMounted(() => {
  productsStore.loadProducts();
});

const onRowClicked = (index: number) => {
  selectedProduct.value = products.value[index];
  showProductModal.value = true;
};

const closeProductModal = () => {
  selectedProduct.value = null;
  showProductModal.value = false;
};

const onSort = (field: string, asc: boolean) => {
  productsStore.loadProducts("", field, asc);
};
</script>

<style lang="scss">
.products-table {
  &__header {
    text-align: start;
    margin-bottom: 1rem;
  }
}
</style>
