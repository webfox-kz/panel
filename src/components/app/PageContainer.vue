<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
<template>
  <main class="px-8 py-6">
    <div class="flex flex-row">
      <h2 class="font-bold text-2xl text-gray-700">{{ title }}</h2>
      <slot name="buttons" />
    </div>
    <div class=" mt-6">
      <slot />
    </div>
  </main>
</template>
