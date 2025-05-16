import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

// Types
interface Profile {
  id: string
  bio: string | null
  avatarUrl: string | null
  createdAt: string
  updatedAt: string
  userId: string
}

interface User {
  id: string
  email: string
  name: string | null
  createdAt: string
  updatedAt: string
  profiles: Profile[]
}

interface UserUpdateData {
  name?: string
  bio?: string
  avatarUrl?: string
}

// Fetch user profile
export function useUserProfile() {
  return useQuery({
    queryKey: ['user-profile'],
    queryFn: async () => {
      try {
        const { data } = await axios.get<{ user: User }>('/api/user')
        return data.user
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 401) {
          // User is not authenticated
          return null
        }
        throw error
      }
    },
  })
}

// Update user profile
export function useUpdateUserProfile() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (userData: UserUpdateData) => {
      const { data } = await axios.put<{ user: User }>('/api/user', userData)
      return data.user
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['user-profile'], data)
    },
  })
}
