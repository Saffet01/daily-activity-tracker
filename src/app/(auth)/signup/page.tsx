import SignUpForm from "@/components/auth/SignUpForm"

export default function SignUpPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-[#1c1c1c] text-white">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-md">
        <SignUpForm />
      </main>
    </div>
  )
} 