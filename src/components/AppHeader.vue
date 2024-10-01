<template>
  <header class="app-header">
    <div class="app-header__container">
      <img class="app-header__logo" src="../assets/storm-logo.png" />
      <IconButton
        @click="openMenu"
        class="app-header__menu"
        icon="hamburguer"
      />
      <SearchProducts class="app-header__search--desktop" />

      <MenuActions class="app-header__menu" v-if="menuActionsVisible" @close-menu="closeMenu" />
      <div class="app-header__menu--desktop">
        <IconButton icon="gear" />
        <IconButton icon="bell" />
        <IconButton icon="profile" :label="currentUser" />
      </div>
    </div>
    <SearchProducts class="app-header__search" />
  </header>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import SearchProducts from "@/components/SearchProducts.vue";
import MenuActions from "@/components/MenuActions.vue";
import IconButton from "@/components/IconButton.vue";
import { useUserStore } from "@/store/user";

const userStore = useUserStore();

const menuActionsVisible = ref(false);
const currentUser = computed(() => userStore.loggedInUser);

const closeMenu = () => {
  menuActionsVisible.value = false;
};

const openMenu = () => {
  menuActionsVisible.value = true;
};
</script>

<style lang="scss">
.app-header {
  width: 100%;
  margin-bottom: 1rem;

  &__container {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }

  &__logo {
    height: 44px;
  }

  &__search {
    height: 44px;

    @media screen and (min-width: 1024px) {
      display: none;
    }
  }

  &__menu {
    @media screen and (min-width: 1024px) {
      display: none;
    }
  }

  &__menu--desktop,
  &__search--desktop {
    display: none;

    @media screen and (min-width: 1024px) {
      display: flex;
    }
  }
}
</style>