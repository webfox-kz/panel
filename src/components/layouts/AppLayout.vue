<script setup lang="ts">
import AppHeader from '@/components/app/AppHeader.vue'
</script>
<template>
  <div class="min-h-screen max-w-screen-md mx-auto shadow-lg">
    <AppHeader />
    <slot />
  </div>
</template>
