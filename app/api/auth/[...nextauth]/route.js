import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@utils/database";

console.log({
  GOOGLE_ID: process.env.GOOGLE_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
});

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  async signIn({ profile }) {
    try {
      await connectToDB();

      // check if user already exists
      
      // if not, create a new user

      return true;
    } catch (error) {
        console.log(error);
        return false;
    }
  },
});

export { handler as GET, handler as POST };
