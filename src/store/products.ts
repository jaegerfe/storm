import { defineStore } from "pinia";
import { ProductsState } from "@/types/Products";
import { getProducts } from "@/api/products";

export const useProductsStore = defineStore('products', {
    state: (): ProductsState => ({
        productsList: [],
        total: 0
    }),
    getters: {
    },
    actions: {
        loadProducts(productName = "", sortBy = "", asc = true) {
            const result = getProducts(productName, sortBy, asc);
            this.productsList = result.data;
            this.total = result.total;
        },
    }
});
