import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Mind Positron</h1>
        <p className="text-xl mb-6 text-gray-600 dark:text-gray-400">
          Your application with Supabase authentication
        </p>
        
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md max-w-3xl w-full mb-8">
          <h2 className="text-2xl font-semibold mb-4">Supabase Integration</h2>
          <p className="mb-4">
            This application uses Supabase for authentication and data storage. Set up your
            Supabase project and update the environment variables in <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">.env.local</code> to get started.
          </p>
          
          <h3 className="text-lg font-medium mt-6 mb-2">Authentication Features</h3>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>User registration with email and password</li>
            <li>Secure login and session management</li>
            <li>Protected routes with middleware</li>
            <li>User profile management</li>
          </ul>
          
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <Link
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="/auth/login"
            >
              Login
            </Link>
            <Link
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="/auth/register"
            >
              Register
            </Link>
            <Link
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="/dashboard"
            >
              Dashboard (Protected)
            </Link>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-6">Next Steps</h3>
        <ol className="list-inside list-decimal text-sm text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Configure your Supabase URL and anon key in{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              .env.local
            </code>
          </li>
          <li className="mb-2">Try registering and logging in with the authentication components</li>
          <li>Explore the protected dashboard route</li>
        </ol>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
