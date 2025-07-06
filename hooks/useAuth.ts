import { useRouter } from 'expo-router'
import { useAuthStore } from '@/store/auth.store'

export const useAuth = () => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)
  const router = useRouter()

  const checkAuthAndRun = (callback: () => void) => {
    if (isAuthenticated) {
      callback()
    } else {
      router.push('/(auth)')
    }
  }

  return { checkAuthAndRun, isAuthenticated }
}
