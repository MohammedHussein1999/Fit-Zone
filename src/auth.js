import { authConfig } from "./config/auth.confg";
import NextAuth from "next-auth";
import Credential from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credential({
      authorize: async (credentials) => {
        console.log("🚀 ~ authorize: ~ credintal:", credentials);
        return { user: "ramez ahmed", email: "ramezahmed@gmail.com" };
      },
    }),
  ],
});
