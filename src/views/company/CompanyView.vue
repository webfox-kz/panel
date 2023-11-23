<script setup lang="ts">
import CompanyDetail from '@/components/companies/CompanyDetail.vue'
import AppLayout from '@/components/layouts/AppLayout.vue'
</script>
<template>
  <AppLayout>
    <CompanyDetail v-if="$route.params?.company" :id="$route.params?.company as string" />
  </AppLayout>
</template>
