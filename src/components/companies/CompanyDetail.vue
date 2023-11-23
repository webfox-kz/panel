<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PageContainer from '../app/PageContainer.vue'
import pb from '@/lib/pocketbase'
import type { RecordModel } from 'pocketbase'

const props = defineProps<{
  id: string
}>()

const isLoading = ref(true)

const company = ref<RecordModel | null>(null)

async function fetchCompany() {
  try {
    isLoading.value = true

    const fetchedData: RecordModel = await pb.collection('companies').getOne(props.id)

    company.value = fetchedData
  } catch (e) {
    console.log(e)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchCompany()
})
</script>
<template>
  <PageContainer v-if="company" :title="company.name"></PageContainer>
</template>
