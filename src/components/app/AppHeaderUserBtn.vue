<script setup lang="ts">
import pb from '@/lib/pocketbase'
import useAuth from '@/stores/auth'
import { computed, ref } from 'vue'
import AppHeaderUserDropdownBtn from './AppHeaderUserDropdownBtn.vue'

const authStore = useAuth()

const userAvatar = computed(() => {
  if (authStore.user?.avatar) {
    return pb.files.getUrl(authStore.user, authStore.user?.avatar, { thumb: '150x0' })
  }
  return null
})

const open = ref(false)
</script>
<template>
  <div class="relative">
    <button
      @click="open = !open"
      class="h-10 w-10 relative overflow-hidden rounded-md cursor-pointer hover:shadow-md hover:bg-white"
    >
      <img v-if="userAvatar" :src="userAvatar" alt="" />
      <f-icon icon="fa-solid fa-user" />
    </button>
    <Transition name="user-dropdown">
      <div class="absolute right-0" v-show="open">
        <div class="bg-white shadow-lg mt-2 p-2 rounded-md border border-neutral-950/20">
          <ul class="flex flex-col gap-2">
            <AppHeaderUserDropdownBtn icon="fa-solid fa-user" text="Профиль" />
            <hr />
            <AppHeaderUserDropdownBtn
              @click="
                () => {
                  pb.authStore.clear()
                  $router.push({ name: 'login' })
                }
              "
              icon="fa-solid fa-arrow-right-from-bracket"
              text="Выйти"
            />
          </ul>
        </div>
      </div>
    </Transition>
  </div>
</template>
<style>
.user-dropdown-enter-active,
.user-dropdown-leave-active {
  transition:
    opacity 0.1s ease,
    transform 0.5s ease;
}

.user-dropdown-enter-from,
.user-dropdown-leave-to {
  transform: translateY(-10%);
  opacity: 0;
}
</style>
