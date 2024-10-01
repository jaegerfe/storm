<template>
  <table class="content-table__table">
    <TableHeader :headerOptions="headerOptions" @sort="onSort" />
    <TableRow
      v-for="(row, index) in content"
      :key="index"
      :content="row"
      @click="() => onRowClick(index)"
    />
  </table>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { TableHeaderItem, TableRowItem } from "@/types/Table";
import TableHeader from "./TableHeader.vue";
import TableRow from "./TableRow.vue";

const props = defineProps<{
  headerOptions: TableHeaderItem[];
  content: TableRowItem[];
  onRowClick: (index: number) => void;
  onSort: (field: string, asc: boolean) => void;
}>();
</script>

<style lang="scss">
.content-table {
  &__table {
    border: 0.0625rem solid #e4e4ef;
    border-radius: 0.5rem;
    border-spacing: 0;
  }
}
</style>