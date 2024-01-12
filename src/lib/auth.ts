import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./db";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          type: "email",
          placeholder: "jsmith@gmail.com",
        },
        password: { type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.log("Credentials missing");
          return null;
        }

        const existingUser = await db.user.findUnique({
          where: { email: credentials?.email },
        });

        console.log("Existing User:", existingUser);

        if (!existingUser) {
          console.log("User not found");
          return null;
        }

        const passwordMatch = await compare(
          credentials.password,
          existingUser.password
        );

        console.log("Password Match:", passwordMatch);

        if (!passwordMatch) {
          console.log("Password does not match");
          return null;
        }

        return {
          id: `${existingUser.id}`,
          email: existingUser.email,
          username: existingUser.username,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          username: user.username,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          username: token.username,
        },
      };
    },
  },
};
