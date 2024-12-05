import NavLinks from "./NavLinks"
import Link from "next/link"
export default function Nav(){

    return <nav className="w-screen fixed top-0 h-20 bg-white px-48 flex items-center justify-between">
        <Link className="font-black text-3xl text-text" href={"/"}>LOGO</Link>

        <NavLinks />
    </nav>
}