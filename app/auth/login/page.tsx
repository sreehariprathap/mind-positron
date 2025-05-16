import Login from '@/components/auth/login'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Login />
        
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <Link href="/auth/register" className="text-blue-600 hover:text-blue-800 underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
