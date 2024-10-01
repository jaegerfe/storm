<template>
  <tr class="table-row__tr" @click="onClick">
    <td
      class="table-row__td"
      v-for="(data, index) in content.rows"
      :key="index"
    >
      {{ data.value }}
    </td>
  </tr>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { TableRowItem } from "@/types/Table";

const props = defineProps<{
  content: TableRowItem;
  onClick: () => void;
}>();
</script>

<style lang="scss">
.table-row {
  &__td {
    padding: 1.125rem 1rem;
    border-top: 0.0625rem solid #e4e4ef;
  }
  &__td:last-of-type {
    border-left: 0.0625rem solid #e4e4ef;
  }
}
</style>