import { error } from "firebase-functions/logger";
import { authConfig } from "./config/auth.config"; 
import NextAuth, { AuthError } from "next-auth";
import Credential from "next-auth/providers/credentials";
import { NextResponse } from "next/server";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credential({
      authorize: async (credentials) => {
        const res = await fetch(
          `http://localhost:4000/users?email=${credentials.email}`
        );
        const userData = await res.json();

        if (!userData || userData.length === 0) {
          const customError = new AuthError({
            cause: {
            error:"user Not found"
          }});
          throw customError;
        }

        return {
          user: userData[0],
          email: userData[0]?.email,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (user) {
        console.log("User signed in:", user);
        return "/home"; 
      }
      return false;
    },
    debug: true,
  }
});
