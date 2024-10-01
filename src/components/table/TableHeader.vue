<template>
  <tr>
    <th
      class="table-header__th"
      v-for="(option, index) in headerOptions"
      v-bind:key="index"
      @click="onSortClicked(option.field)"
    >
      {{ option.title }}
    </th>
  </tr>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { TableHeaderItem } from "@/types/Table";

const props = defineProps<{
  headerOptions: TableHeaderItem[];
  onSort: (field: string, asc: boolean) => void;
}>();

const asc = ref(true);
const lastField = ref("");

const onSortClicked = (field: string) => {
  if (lastField.value == field) {
    asc.value = !asc.value;
  } else {
    asc.value = true;
    lastField.value = field;
  }
  props.onSort(field, asc.value);
};
</script>

<style lang="scss">
.table-header {
  &__th {
    padding: 1.125rem 1rem;
    cursor: pointer;
  }
  &__th:last-of-type {
    border-left: 0.0625rem solid #e4e4ef;
  }
}
</style>