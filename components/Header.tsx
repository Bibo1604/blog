'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebook, FaInstagram, FaRegUser, FaRegMoneyBillAlt } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { RiAdminLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const links = [
    {
        text: "Home",
        href: "/",
        icon: IoHomeOutline,
    },
    {
        text: "About",
        href: "/about",
        icon: FaRegUser,
    },
    {
        text: "Authors",
        href: "/authors",
        icon: FaRegMoneyBillAlt,
    },
]

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="mb-4">
            <div className="flex items-center justify-between mx-auto px-7 md:px-10 lg:px-20 py-5">
                <Link
                    href="/"
                    className="text-3xl md:text-4xl font-bold text-orange-500"
                >
                    BIBO
                </Link>
                <nav className="hidden md:flex items-center gap-12">
                    {links.map((link) => (
                        <div key={link.text}>
                            {pathname === link.href ? (
                                <Link
                                    href={link.href}
                                    className="text-lg font-semibold text-orange-500"
                                >
                                    {link.text}
                                </Link>
                            ) : (
                                <Link
                                    href={link.href}
                                    className="text-lg font-semibold text-black hover:text-orange-500 transition duration-100"
                                >
                                    {link.text}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Social and menu burger button */}
                <div className="flex items-center gap-5">
                    <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        className="text-2xl hover:text-orange-500"
                    >
                        <FaFacebook />
                    </Link>
                    <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        className="text-2xl hover:text-orange-500"
                    >
                        <FaInstagram />
                    </Link>
                    <Link href="/studio" target="_blank">
                        <Button className="hover:bg-orange-500 hidden md:block">
                            Admin
                        </Button>
                    </Link>

                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="md:hidden hover:bg-orange-500"><CiMenuBurger /></Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 mt-3">
                                <DropdownMenuLabel>Menu Options</DropdownMenuLabel>

                                <DropdownMenuSeparator />

                                <DropdownMenuGroup>
                                    {links.map((link) => (
                                        <DropdownMenuItem key={link.text}>
                                            {pathname === link.href ? (
                                                <Link
                                                    href={link.href}
                                                    className="flex gap-3 items-center"
                                                >
                                                    <link.icon className="text-lg" />
                                                    <span className="text-orange-500">{link.text}</span>
                                                </Link>
                                            ) : (
                                                <Link
                                                    href={link.href}
                                                    className="flex gap-3 items-center"
                                                >
                                                    <link.icon className="text-lg" />
                                                    <span>{link.text}</span>
                                                </Link>
                                            )}

                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuGroup>

                                <DropdownMenuSeparator />

                                <DropdownMenuItem>
                                    <Link
                                        href="/studio"
                                        className="flex items-center gap-3">
                                        <RiAdminLine className="text-lg" />
                                        <span>Admin</span>
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </header>
    )
}