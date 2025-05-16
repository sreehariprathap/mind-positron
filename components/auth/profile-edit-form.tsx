'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useUserProfile, useUpdateUserProfile } from '@/lib/hooks/use-user'

// Form validation schema
const profileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').optional().nullable(),
  bio: z.string().max(500, 'Bio cannot exceed 500 characters').optional().nullable(),
})

type ProfileFormValues = z.infer<typeof profileSchema>

export default function ProfileEditForm() {
  const { data: user } = useUserProfile()
  const updateProfile = useUpdateUserProfile()
  const [isEditing, setIsEditing] = useState(false)
  
  const { register, handleSubmit, formState: { errors } } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user?.name || '',
      bio: user?.profiles?.[0]?.bio || '',
    },
  })

  const onSubmit = async (data: ProfileFormValues) => {
    try {
      await updateProfile.mutateAsync({
        name: data.name || undefined,
        bio: data.bio || undefined,
      })
      setIsEditing(false)
    } catch (error) {
      console.error('Error updating profile:', error)
    }
  }

  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Profile Information</h2>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
          >
            Edit
          </button>
        ) : null}
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              {...register('name')}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bio
            </label>
            <textarea
              {...register('bio')}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.bio && (
              <p className="mt-1 text-sm text-red-600">{errors.bio.message}</p>
            )}
          </div>
          
          <div className="flex gap-3 justify-end">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={updateProfile.isPending}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded disabled:opacity-50"
            >
              {updateProfile.isPending ? 'Saving...' : 'Save'}
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Name</h3>
            <p>{user?.name || 'Not set'}</p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-500">Bio</h3>
            <p className="whitespace-pre-line">{user?.profiles?.[0]?.bio || 'No bio provided'}</p>
          </div>
        </div>
      )}
    </div>
  )
}
