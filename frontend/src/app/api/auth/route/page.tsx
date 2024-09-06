import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const res = await fetch("http://localhost:5000/api/login", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        });
        const user = await res.json();

        if (res.ok && user) {
          return user;
        }
        return null;
      }
    }),
    // Add Google provider here
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user && 'token' in user) {
        token.accessToken = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        accessToken: token.accessToken as string
      };
    },
  },
  pages: {
    signIn: '/login',
  },
});

export { handler as GET, handler as POST };