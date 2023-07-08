import Link from "next/link";

export default function Home():JSX.Element {
  return (
    <main>
      <Link href={'/admin'}>To the /admin</Link>
      <br/>
      <Link href={'/home'}>To the /home</Link>
      App works!
    </main>
  )
}
