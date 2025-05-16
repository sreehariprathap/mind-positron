'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AuthCallback() {
  const router = useRouter()

  useEffect(() => {
    // This page handles redirects from email links or OAuth providers
    // After the user is authenticated, redirect them to the home page or dashboard
    router.push('/')
  }, [router])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Authenticating...</h2>
        <p>You will be redirected shortly.</p>
      </div>
    </div>
  )
}
