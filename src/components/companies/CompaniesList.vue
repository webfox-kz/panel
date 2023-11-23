<script setup lang="ts">
import pb from '@/lib/pocketbase'
import { onMounted, ref } from 'vue'
import type { ListResult, RecordModel } from 'pocketbase'
import PageContainer from '../app/PageContainer.vue'
import CompanyPlaceholder from './CompanyPlaceholder.vue'
import CompanyItem from './CompanyItem.vue'

const isLoading = ref(true)

const companies = ref<ListResult<RecordModel>>({
  page: 0,
  perPage: 0,
  totalItems: 0,
  totalPages: 0,
  items: []
})

async function fetchCompanies() {
  try {
    isLoading.value = true
    
    const fetchedData: ListResult<RecordModel> = await pb.collection('companies').getList()

    companies.value = {
      ...fetchedData
    }
  } catch (e) {
    console.log(e)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchCompanies()
})
</script>
<template>
  <PageContainer title="Список ваших компании">
    <ul v-if="isLoading" class="flex flex-col gap-4">
      <CompanyPlaceholder />
      <CompanyPlaceholder />
    </ul>
    <ul v-else class="flex flex-col gap-4">
      <CompanyItem v-for="company in companies.items" :company="company" :key="company.id" />
    </ul>
  </PageContainer>
</template>
