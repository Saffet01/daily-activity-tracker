'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase/config';
import { useAuth } from '@/lib/hooks/useAuth';

export default function Dashboard() {
  const router = useRouter();
  const { signOut } = useAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push('/login');
      }
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <div className="min-h-screen bg-[#1c1c1c] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-light">Dashboard</h1>
          <button 
            onClick={signOut}
            className="px-4 py-2 rounded-full bg-[#e8e8e8] text-black"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
} 