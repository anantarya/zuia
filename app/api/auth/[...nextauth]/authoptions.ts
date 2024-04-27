import bcrypt  from 'bcryptjs';
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { SessionStrategy } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from 'next-auth';


export const authOptions:NextAuthOptions = {
    providers: [
      CredentialsProvider({
        name: "credentials",
        credentials: {},
        async authorize(
          credentials: Record<string, string> | undefined
        ): Promise<any> {
          const { email, password } = credentials as {
            email: string;
            password: string;
          };
  
          try {
            await connectMongoDB();
            const user = await User.findOne({ email });
  
            if (!user) {
              return null;
            }
  
            const passwordsMatch = await bcrypt.compare(password, user.password);
            if (!passwordsMatch) {
              return null;
            }
  
            return user;
          } catch (error) {
            console.log(error);
          }
        },
      }),
    ],
    session: {
      strategy: "jwt" as SessionStrategy,
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
      signIn: "/login",
    },
  };
  