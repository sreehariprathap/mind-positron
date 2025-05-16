// Logout Button using Supabase auth
'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function LogoutButton() {
  const [loading, setLoading] = useState(false)

  const handleLogout = async () => {
    setLoading(true)
    try {
      await supabase.auth.signOut()
      // Redirect or refresh the page as needed after logout
    } catch (error) {
      console.error('Error logging out:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors disabled:opacity-50"
    >
      {loading ? 'Logging out...' : 'Logout'}
    </button>
  )
}
