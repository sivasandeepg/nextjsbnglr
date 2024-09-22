import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const AdminPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Wait for session check

    if (!session) {
      router.push('/auth/signin');
    } else if (session.user.role !== 'admin') {
      router.push('/user');
    }
  }, [session, status, router]);

  if (!session || session.user.role !== 'admin') {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
      <p className="mt-4 text-gray-600">Welcome, {session.user.email}!</p>
      <div className="mt-6 bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        {/* Admin-specific content */}
        <p className="text-xl">Admin tools and analytics go here.</p>
      </div>
    </div>
  );
};

export default AdminPage;
 