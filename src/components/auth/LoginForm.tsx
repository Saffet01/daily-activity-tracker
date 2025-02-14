'use client';

import { useState } from 'react';
import BackButton from '@/components/BackButton'
import Link from 'next/link'
import { useAuth } from '@/lib/hooks/useAuth'

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, error, loading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn(email, password);
  };

  return (
    <div className="flex flex-col items-center gap-16 w-full">
      <BackButton />
      
      <h1 className="text-5xl font-light">Habit Builder</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-4 rounded-full bg-[#e8e8e8] text-black text-center placeholder:text-gray-500 focus:placeholder:opacity-0"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-4 rounded-full bg-[#e8e8e8] text-black text-center placeholder:text-gray-500 focus:placeholder:opacity-0"
        />
        
        {error && (
          <p className="text-red-500 text-center">{error}</p>
        )}
        
        <button 
          type="submit" 
          disabled={loading}
          className="w-full p-4 rounded-full bg-[#e8e8e8] text-black mt-8 disabled:opacity-50"
        >
          {loading ? 'Loading...' : 'Login'}
        </button>
      </form>

      <p className="text-[#e8e8e8]">
        Dont have an account?{" "}
        <Link href="/signup" className="underline">
          Sign Up Here
        </Link>
      </p>
    </div>
  )
} 