import Link from "next/link"

export default function Admin():JSX.Element{
    return (
        <>
        <Link href={'/'}>To the /</Link>
        <br/>
        <Link href={'/home'}>To the /home</Link>
        <p>Admin works!</p>
        </>
    )
}