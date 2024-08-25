"use client";

import Link from "next/link";
import { itemsNavbar } from "@/data";
import { MotionTransition } from "./transition-component";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const router = usePathname();

    return (
        <MotionTransition position="right" className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10">
            <nav>
                <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/80 backdrop-blur-sm shadow-md">
                    {itemsNavbar.map((item) => (
                        <div
                            key={item.id}
                            className="relative group px-3 py-2 transition duration-150 rounded-full cursor-pointer flex items-center justify-center"
                        >
                            <Link href={item.link}>
                                <span
                                    className={`flex items-center justify-center p-3 rounded-full transition-colors duration-150 ${
                                        router === item.link
                                            ? 'bg-secondary text-white'
                                            : 'bg-gray-800 text-white'
                                    }`}
                                >
                                    {item.icon}
                                </span>
                            </Link>
                            {/* Tooltip */}
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-2 py-1 text-sm text-white bg-gray-800 border border-gray-700 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                                {item.title}
                            </div>
                        </div>
                    ))}
                </div>
            </nav>
        </MotionTransition>
    );
};

export default Navbar;
