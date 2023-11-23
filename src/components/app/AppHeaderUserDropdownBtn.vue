<script setup lang="ts">
defineProps<{
  icon: string
  text: string
}>()
</script>
<template>
  <li>
    <button class="px-3 py-2 hover:bg-gray-200 rounded-md flex items-center gap-2 w-full">
      <f-icon :icon="icon" />
      {{ text }}
    </button>
  </li>
</template>
