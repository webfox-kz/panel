<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import MainLogo from '../MainLogo.vue'
import pb from '@/lib/pocketbase'

const loginData = reactive({
  identity: '',
  password: ''
})
const router = useRouter()
const loading = ref(false)

const login = async () => {
  try {
    loading.value = true
    await pb.collection('users').authWithPassword(loginData.identity, loginData.password)
    router.push({ name: 'home' })
  } catch (e) {
    useToast().error('Введены неверные данные.')
  } finally {
    loading.value = false
  }
}
</script>
<template>
  <div class="sm:max-w-md max-w-none w-full flex flex-col gap-2 sm:gap-16">
    <div class="flex sm:justify-center w-full px-8">
      <MainLogo
        class="fill-neutral-500 hover:fill-red-600 transition-colors duration-150 h-10 w-auto"
      />
    </div>
    <div class="w-full sm:max-w-md sm:border py-8 px-8 sm:rounded-lg sm:shadow-lg flex flex-col gap-8">
      <div>
        <h3 class="text-2xl font-bold">Войти</h3>
        <p class="text-neutral-600 text-sm">Войдите чтобы продолжить</p>
      </div>
      <form @submit.prevent="login">
        <div class="flex flex-col gap-4">
          <div>
            <label class="flex flex-col gap-1">
              <span class="text-sm">Идентификатор</span>
              <input
                v-model="loginData.identity"
                type="text"
                name="identity"
                autocomplete="off"
                placeholder="Имя пользователя или email"
                class="border border-neutral-300 focus:border-neutral-600 px-3 py-2 rounded-lg focus:outline-none"
              />
            </label>
          </div>
          <div>
            <label class="flex flex-col gap-1">
              <span class="text-sm">Пароль</span>
              <input
                v-model="loginData.password"
                type="password"
                name="password"
                autocomplete="off"
                placeholder="Ваш крутой парол"
                class="border border-neutral-300 focus:border-neutral-600 px-3 py-2 rounded-lg focus:outline-none"
              />
            </label>
          </div>
          <div class="mt-4">
            <button
              class="px-3 py-2 w-full rounded-lg bg-neutral-800 text-white font-semibold hover:bg-neutral-600 disabled:bg-neutral-500 disabled:cursor-not-allowed"
              :disabled="
                loginData.identity.length === 0 || loginData.password.length < 6 || loading
              "
            >
              <div class="flex flex-row justify-center items-center gap-2">
                <span>Войти</span>
                <span
                  v-if="loading"
                  class="w-4 h-4 border-2 border-transparent border-t-neutral-50 rounded-full animate-spin"
                ></span>
              </div>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
