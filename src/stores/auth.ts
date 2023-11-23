import { defineStore } from 'pinia'
import type { AuthModel } from 'pocketbase'

interface IState {
  _user: AuthModel
}

const useAuth = defineStore('auth', {
  state: (): IState => ({
    _user: null
  }),
  actions: {
    setUser(user: AuthModel) {
      this._user = user
    }
  },
  getters: {
    user: (state): AuthModel => {
      return state._user
    }
  }
})

export default useAuth
