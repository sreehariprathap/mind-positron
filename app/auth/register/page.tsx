import Register from '@/components/auth/register'
import Link from 'next/link'

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Register />
        
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-blue-600 hover:text-blue-800 underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
