import NextAuth from "next-auth/next";
import Auth_Options from "./options";
const handler = NextAuth(Auth_Options);

export { handler as GET, handler as POST };
