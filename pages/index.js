import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-6">Welcome to Multi-Vendor Dashboard</h1>
        <div className="flex flex-col space-y-4">
          <Link href="/auth/signin">
            <div className="bg-blue-500 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-700">
              Sign In
            </div>
          </Link>
          <Link href="/auth/signup">
            <div className="bg-green-500 text-white py-2 px-4 rounded-lg text-center hover:bg-green-700">
              Sign Up
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
 