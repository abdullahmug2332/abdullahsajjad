"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";
import { usePathname } from "next/navigation";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";

import useTheme from "@/hooks/useTheme"; // path where you saved it

export function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, toggle } = useTheme(); // theme === "light" | "dark" | null

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-2 transition-all duration-500">
            <div className="container">
                <nav
                    className={`${isScrolled ? "md:w-[70%] xl:w-[60%]" : "w-full"
                        } mx-auto flex items-center md:justify-between px-6 py-3 border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 rounded-full`}
                >
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-grey-800 font-semibold text-lg duration-300 hover:scale-[1.1] "
                    >
                        AS
                    </Link>

                    <div className="items-center gap-8 text-gray-500 hidden md:flex">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.path;

                            return (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`text-sm font-[600] transition-all duration-300 hover:scale-[1.05] hover:-translate-y-1 
              ${isActive ? "text-black dark:text-white hcolor" : "text-gray-400 dark:text-gray-200 hcolor"}`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Theme toggle */}
                    <button
                        onClick={toggle}
                        aria-label="Toggle theme"
                        className="duration-300 hover:-rotate-6 hover:scale-[1.08] cursor-pointer ml-auto md:ml-0 mr-[20px] !focus-outline-0 !active:outline-0 !focus-ring-0 !active:ring-0 "
                    >
                        {/* while `theme` is null (before mount) show nothing to avoid mismatch */}
                        {theme === "dark" ? <FiSun /> : theme === "light" ? <FaRegMoon /> : null}
                    </button>

                    <div className="block md:hidden">
                        <Sheet>
                            <SheetTrigger className="flex items-center">
                                <CiMenuFries className="text-[22px] font-bold" />
                            </SheetTrigger>
                            <SheetContent className="bg-white/5 backdrop-blur-md border-l-0">
                                <SheetHeader>
                                    <SheetDescription>
                                        <div className="items-center gap-8 flex flex-col mt-[100px]">
                                            {navLinks.map((link) => (
                                                <Link
                                                    key={link.path}
                                                    href={link.path}
                                                    className="text-sm font-[600] hover:scale-[1.05] text-white hover:-translate-y-1 duration-300 hcolor "
                                                >
                                                    {link.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                </nav>
            </div>
        </div>
    );
}
