<template>
  <div class="menu-actions__container">
    <IconButton icon="gear" label="Settings" />
    <IconButton icon="bell" label="Notifications" />
    <IconButton icon="profile" :label="currentUser" />

    <IconButton
      @click="emits('close-menu')"
      class="menu-actions__close"
      icon="close"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits } from "vue";
import IconButton from "@/components/IconButton.vue";
import { useUserStore } from "../store/user";

const emits = defineEmits(["close-menu"]);

const userStore = useUserStore();

const currentUser = computed(() => userStore.loggedInUser);
</script>

<style lang="scss">
.menu-actions {
  &__container {
    box-sizing: border-box;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    gap: 0.125rem;

    @media screen and (min-width: 1024px) {
      flex-direction: row;
      position: relative;
      width: fit-content;
      height: fit-content;
    }
  }

  &__close {
    align-self: flex-end;
    @media screen and (min-width: 1024px) {
      display: none;
    }
  }
}
</style>