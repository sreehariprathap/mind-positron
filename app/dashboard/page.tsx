'use client'

import UserProfile from '@/components/auth/user-profile'
import ProfileEditForm from '@/components/auth/profile-edit-form'
import { useUserProfile } from '@/lib/hooks/use-user'

export default function Dashboard() {
  const { data: user, isLoading, error } = useUserProfile()

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      {isLoading && (
        <div className="flex justify-center my-8">
          <p>Loading user data...</p>
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-lg mb-6">
          Error loading user data. Please try again.
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <UserProfile />
        </div>
          <div className="md:col-span-2">
          {user ? (
            <>
              <ProfileEditForm />
              
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Account Information</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Email</h3>
                    <p>{user.email}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Member Since</h3>
                    <p>{new Date(user.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Your Profile Details</h2>
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800">
                  This is a protected page that only authenticated users can access.
                  The middleware redirects unauthenticated users to the login page.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
