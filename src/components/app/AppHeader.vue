<script setup lang="ts">
import { RouterLink } from 'vue-router'
import MainLogo from '@/components/MainLogo.vue'
import AppHeaderUserBtn from './AppHeaderUserBtn.vue'
</script>
<template>
  <header class=" border-b border-b-neutral-950/10">
    <div class="px-8 py-6 flex flex-row justify-between">
      <RouterLink :to="{ name: 'home' }">
        <MainLogo
          class="h-10 w-auto fill-neutral-500 hover:fill-red-600 transition-colors duration-150"
        />
      </RouterLink>
      <div>
        <AppHeaderUserBtn />
      </div>
    </div>
  </header>
</template>
