<script setup lang="ts">
import { computed } from 'vue'
import type { RecordModel } from 'pocketbase'
import { CompanyTypeEnum } from '@/types/company-type.enum'
import pb from '@/lib/pocketbase'

const props = defineProps<{
  company: RecordModel
}>()

const companyLogo = computed(() => {
  if (props.company.logo) {
    return pb.files.getUrl(props.company, props.company.logo, { thumb: '200x0' })
  }
  return null
})
</script>
<template>
  <li>
    <RouterLink
      :to="{ name: 'CompanyIndex', params: { company: company.id } }"
      class="w-full p-4 bg-white rounded-md shadow-gray-300/10 flex flex-row items-center gap-4 hover:shadow-lg transition-shadow duration-150 border border-neutral-950/10"
    >
      <div
        class="h-14 w-14 bg-gray-200 flex items-center justify-center overflow-hidden rounded-md"
      >
        <img
          :src="companyLogo"
          :alt="companyLogo"
          v-if="companyLogo"
          class="object-cover w-full h-full"
        />
        <f-icon icon="fa-solid fa-image" size="2x" class="text-gray-300" v-else />
      </div>
      <div class="grow">
        <h5 class="text-xl font-semibold">{{ company.name }}</h5>
        <span class="text-sm text-gray-600">
          {{ CompanyTypeEnum[company.type as 'shop' | 'restaurant'] }}
        </span>
      </div>
      <div
        class="text-xs px-2 py-1 rounded-full text-gray-800 font-semibold"
        :class="[company.active ? 'bg-green-200' : 'bg-red-200']"
      >
        {{ company.active ? 'Активен' : 'Неактивен' }}
      </div>
    </RouterLink>
  </li>
</template>
