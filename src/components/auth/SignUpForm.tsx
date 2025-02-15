'use client';

import { useState } from 'react';
import BackButton from '@/components/BackButton';
import Link from 'next/link';
import { useAuth } from '@/lib/hooks/useAuth';

export default function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const { signUp, error, loading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError(null);

    if (password !== confirmPassword) {
      setPasswordError("Passwords don't match");
      return;
    }

    if (password.length < 6) {
      setPasswordError("Password should be at least 6 characters");
      return;
    }

    await signUp(email, password);
  };

  return (
    <div className="flex flex-col items-center gap-16 w-full">
      <BackButton />

      <div className="flex flex-col items-center gap-4">
        <h1 className="text-5xl font-light">HabiTapp</h1>
        <p className="text-[#e8e8e8] text-center">
          &quot;Your Habits in an App with just one Tap&quot;
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full p-4 rounded-full bg-[#e8e8e8] text-black text-center placeholder:text-gray-500 focus:placeholder:opacity-0"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full p-4 rounded-full bg-[#e8e8e8] text-black text-center placeholder:text-gray-500 focus:placeholder:opacity-0"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Re-type Password"
          required
          className="w-full p-4 rounded-full bg-[#e8e8e8] text-black text-center placeholder:text-gray-500 focus:placeholder:opacity-0"
        />

        {passwordError && (
          <p className="text-red-500 text-center">{passwordError}</p>
        )}
        {error && (
          <p className="text-red-500 text-center">{error}</p>
        )}

        <button 
          type="submit"
          disabled={loading}
          className="w-full p-4 rounded-full bg-[#e8e8e8] text-black mt-8 disabled:opacity-50 hover:bg-[#d1d1d1] transition-colors"
        >
          {loading ? 'Creating Account...' : 'Sign Up'}
        </button>
      </form>

      <p className="text-[#e8e8e8]">
        Already have an account?{" "}
        <Link href="/login" className="underline">
          Login Here
        </Link>
      </p>
    </div>
  );
}