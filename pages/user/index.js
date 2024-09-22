import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const UserPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Wait for session check

    if (!session) {
      router.push('/auth/signin');
    } else if (session.user.role === 'admin') {
      router.push('/admin');
    }
  }, [session, status, router]);

  if (!session || session.user.role !== 'user') {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">User Dashboard</h1>
      <p className="mt-4 text-gray-600">Welcome, {session.user.email}!</p>
      <div className="mt-6 bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        {/* User-specific content */}
        <p className="text-xl">User dashboard content goes here.</p>
      </div>
    </div>
  );
};

export default UserPage;
