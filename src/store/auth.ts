import { create } from 'zustand'

interface User {
  id: string
  name: string
}

interface AuthState {
  isAuthenticated: boolean
  user: User | null
  token: string | null
}

interface AuthActions {
  login: (user: User, token: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState & AuthActions>()((set) => ({
  isAuthenticated: false,
  user: null,
  token: null,
  login: (user, token) => set({ isAuthenticated: true, user, token }),
  logout: () => set({ isAuthenticated: false, user: null, token: null }),
}))

export const getAuthState = () => useAuthStore.getState()
