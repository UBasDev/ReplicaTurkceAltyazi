"use client";

import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

export default function Login_Component(): JSX.Element {
  const [userInfo, setUserInfo] = useState({ username: ``, password: `` });
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const res = await signIn("credentials", {
      //Böylece `CredentialsProvider` providerını kullanacağını belirttik
      username: userInfo.username,
      password: userInfo.password,
      redirect: false, // Eğer `true` ise user, `authenticated` olsa dahi bu sayfada kalır, redirect etmez
    });
    if (res?.error) alert(res?.error);
    else router.push("/home");
  };

  return (
    <div>
      <p>Login works!</p>
      <form onSubmit={handleSubmit}>
        <input
          style={{ border: "1px solid black" }}
          className="border"
          name="username"
          onChange={(e) =>
            setUserInfo({ ...userInfo, username: e.target.value })
          }
        />
        <input
          style={{ border: "1px solid black" }}
          name="password"
          onChange={(e) =>
            setUserInfo({ ...userInfo, password: e.target.value })
          }
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
