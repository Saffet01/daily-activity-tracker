import BackButton from '@/components/BackButton'
import Link from 'next/link'

export default function LoginForm() {
  return (
    <div className="flex flex-col items-center gap-16 w-full">
      <BackButton />
      
      <h1 className="text-5xl font-light">Habit Builder</h1>

      {/* Login Form */}
      <div className="flex flex-col gap-4 w-full">
        <input
          type="text"
          placeholder="User"
          className="w-full p-4 rounded-full bg-[#e8e8e8] text-black text-center placeholder:text-gray-500 focus:placeholder:opacity-0"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 rounded-full bg-[#e8e8e8] text-black text-center placeholder:text-gray-500 focus:placeholder:opacity-0"
        />
        <button className="w-full p-4 rounded-full bg-[#e8e8e8] text-black mt-8">
          Login
        </button>
      </div>

      <p className="text-[#e8e8e8]">
        Dont have an account?{" "}
        <Link href="/signup" className="underline">
          Sign Up Here
        </Link>
      </p>
    </div>
  )
} 