import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const Auth_Options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      /*
        Artık `http://localhost:3000/api/auth/providers` routeuna GET requesti attığımızda bize bu applikasyonun sahip olduğu credentialları döndürecek. Mesela: 
        {
            "credentials": {
                "id": "credentials",
                "name": "Credentials",
                "type": "credentials",
                "signinUrl": "http://localhost:3000/api/auth/signin/credentials",
                "callbackUrl": "http://localhost:3000/api/auth/callback/credentials"
            },
            "github":{
                "id": "github",
                "name": "GitHub",
                "type": "oauth",
                "signinUrl": "http://localhost:3000/api/auth/signin/github",
                "callbackUrl": "http://localhost:3000/api/auth/callback/github"
            }
        }
        */
      name: "Credentials",
      type: "credentials",
      credentials: {
        username: {
          //label: "Username1:", ->input labelıdır
          //type: "text", ->input typeıdır
          //placeholder: "Your Username1", ->input placeholderıdır
        },
        password: {
          //label: "Password1:",
          //type: "password",
          //placeholder: "Your Password1",
        },
      },
      async authorize(credentials, req) {
        //Burada user datası çekilir. Databasede kontrolü sağlanır. Loginin verify edilecek kısmıdır.
        const user_credentials = {
          id: "42",
          username: "ahmet1",
          password: "password1",
        };
        if (
          credentials?.username === user_credentials.username &&
          credentials?.password === user_credentials.password
        )
          return {
            id: "",
            username: "",
            email: "",
            accessToken: "AccessText1",
            refreshToken: "RefreshText1",
          };
        return Promise.reject(new Error("Check your credentials!"));
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    signOut: "/home",
  },
  callbacks: {
    async signIn(props) {
      console.log("SIGNIN CALLBACK", props);
      return true;
    },
    async jwt(props) {
      if (props.user) {
        return { ...props.token, ...props.user };
      }
      return { ...props.token };
    },
    async session(props) {
      props.session.user = props.token;
      return props.session;
    },
  },
};
export default Auth_Options;
