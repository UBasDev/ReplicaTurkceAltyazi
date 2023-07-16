import Auth_Options from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function Send_Subtitles_Component() {
  const session = await getServerSession(Auth_Options);

  if (!session) redirect("/auth/login");

  return <div>Send Subtitles works!</div>;
}
