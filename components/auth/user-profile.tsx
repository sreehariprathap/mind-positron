'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import LogoutButton from '@/components/auth/logout-button'
import { User } from '@supabase/supabase-js'

export default function UserProfile() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser()
        setUser(user)
      } catch (error) {
        console.error('Error fetching user:', error)
      } finally {
        setLoading(false)
      }
    }

    getUser()

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null)
      }
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p>Loading...</p>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-yellow-800">
          You are not logged in. Please log in to view your profile.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500">Email</p>
          <p className="font-medium">{user.email}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">User ID</p>
          <p className="font-medium text-sm">{user.id}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Last Sign In</p>
          <p className="font-medium">
            {user.last_sign_in_at 
              ? new Date(user.last_sign_in_at).toLocaleString() 
              : 'N/A'}
          </p>
        </div>
        <div className="pt-4">
          <LogoutButton />
        </div>
      </div>
    </div>
  )
}
