import NextAuth from 'next-auth'; // Import NextAuth
import CredentialsProvider from 'next-auth/providers/credentials'; // Import CredentialsProvider
import User from '../../../models/User';
import dbConnect from '../../../lib/dbConnect';
import bcrypt from 'bcryptjs';

export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await dbConnect();

        const user = await User.findOne({ email: credentials.email });

        if (!user) {
          throw new Error('No user found with this email');
        }

        const isValidPassword = await bcrypt.compare(credentials.password, user.password);
        if (!isValidPassword) {
          throw new Error('Invalid email or password');
        }

        // Return only the necessary user data
        return { email: user.email, role: user.role };
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, user }) {
      // Add the user role to the token if the user is available
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      // Pass the user role to the session
      session.user.role = token.role;
      return session;
    },
  },
});
  