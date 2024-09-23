import { useSession, signOut } from 'next-auth/react';
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

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/auth/signin' }); // Redirect to sign-in after logout
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
      <p className="mt-4 text-gray-600">Welcome, {session.user.email}!</p>
      
      <div className="mt-6 bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        {/* Admin-specific content */}
        <p className="text-xl">Admin tools and analytics go here.</p>
      </div>

      {/* Logout button */}
      <button
        onClick={handleLogout}
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
      >
        Logout
      </button>
    </div>
  );
};

export default AdminPage;
 