import BackButton from '@/components/BackButton'

export default function SignUpForm() {
  return (
    <div className="flex flex-col items-center gap-16 w-full">
      <BackButton />

      <div className="flex flex-col items-center gap-4">
        <h1 className="text-5xl font-light">HabiTapp</h1>
        <p className="text-[#e8e8e8] text-center">
          &quot;Your Habits in an App with just one Tap&quot;
        </p>
      </div>

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
        <input
          type="password"
          placeholder="Re-type Password"
          className="w-full p-4 rounded-full bg-[#e8e8e8] text-black text-center placeholder:text-gray-500 focus:placeholder:opacity-0"
        />
        <button className="w-full p-4 rounded-full bg-[#e8e8e8] text-black mt-8">
          Sign Up
        </button>
      </div>

      <p className="text-[#e8e8e8]">
        Already have an account?{" "}
        <a href="/login" className="underline">
          Login Here
        </a>
      </p>
    </div>
  )
} 