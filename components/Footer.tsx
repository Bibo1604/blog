import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="pt-10 pb-5 bg-slate-900 text-white space-y-5">
            <nav className="grid grid-flow-col gap-5 items-center justify-center">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/about" className="hover:underline">About</Link>
                <Link href="/authors" className="hover:underline">Marketplace</Link>
            </nav>

            <nav className="grid grid-flow-col gap-5 items-center justify-center">
                <Link href="https://www.facebook.com/" className="text-2xl"><FaFacebookF/></Link>
                <Link href="https://www.instagram.com/" className="text-3xl"><FaInstagram/></Link>
            </nav>

            <div className="flex flex-col items-center justify-center">
                <p className="text-xs">Copyright © 2023</p>
                <p className="text-xs">All right reserved by Hoang Nguyen</p>
            </div>
        </footer>
    )
}