"use client";

import { UPWORK } from "@/app/page";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiBracesLine } from "react-icons/ri";

function HeaderButton({children, href}: {children: React.ReactNode, href: string}){
    return <Link className="text-gray-600 hover:text-gray-500" href={href}>
        {children}
    </Link>
}

function DropButton({children, href, className, value}: {children: React.ReactNode, href: string, className: string, value: boolean}){
    return <Link className={`bg-gray-200 text-gray-800 p-2.5 duration-400 text-lg text-center block rounded-lg transition-all translate-y-5 ${value ? "!translate-y-0":""} ${className}`} href={href}>
        {children}
    </Link>
}

export default function Header() {
    const [drop, setDrop] = React.useState<boolean>(false);

    return <>
        <div className="bg-gray-50/80 border-b border-gray-200 backdrop-blur-md z-99 fixed top-0 left-0 w-full">
            <div className="w-full max-w-[1500px] h-[60px] mx-auto flex items-center justify-between px-6">
                <div className="flex gap-5 items-center">
                    <Image className="rounded-xl" width={40} height={40} src="https://matex.hu/logo.jpg" alt="" />
                    <h1 className="font-bold text-xl font-[var(--font-inter)]">Meszmate's Portfolio</h1>
                </div>
                <div className="hidden md:flex gap-5">
                    <div className="flex items-center gap-4">
                        <HeaderButton href="https://matex.hu">Social Media</HeaderButton>
                        <HeaderButton href={UPWORK}>Upwork</HeaderButton>
                        <HeaderButton href="https://dc.matex.hu">Discord</HeaderButton>
                    </div>
                    <Link className="bg-blue-600 py-1 px-3 text-white hover:bg-blue-700 rounded-md flex items-center gap-2" href={"https://github.com/meszmate/portfolio"}>
                        Source Code
                        <RiBracesLine width={15} className="-translate-y-[.5px]"/>
                    </Link>
                </div>
                <div className="flex flex-col gap-2 justify-center md:hidden cursor-pointer" onClick={() => setDrop(true)}>
                    {Array(3).fill(null).map((_, i) => {
                        return <div key={i} className="w-11 h-1 bg-gray-700"></div>
                    })}
                </div>
            </div>
        </div>
        <div className={`p-5 invisible opacity-0 transition-all fixed top-0 left-0 h-full w-full translate-y-5 bg-white z-99 md:!hidden ${drop ? "visible opacity-100 !translate-y-0":""}`}>
            <div className="ml-auto w-15 h-15 relative cursor-pointer" onClick={() => setDrop(false)}>
                {[true, false].map((v, i) => {
                    return <div key={i} className={`w-11 h-0.5 bg-gray-400 absolute top-[50%] -translate-y-0.5 ${v ? "-rotate-45":"rotate-45"}`}></div>
                })}
            </div> 
            <div className="grid gap-3 mt-7">
                <DropButton href="https://matex.hu" value={drop} className="">Social Media</DropButton>
                <DropButton href={UPWORK} value={drop} className="delay-100">Upwork</DropButton>
                <DropButton href="https://dc.matex.hu" value={drop} className="delay-200">Discord</DropButton>
                <DropButton href="https://github.com/meszmate/portfolio" value={drop} className="delay-300 !bg-blue-200 !text-blue-900">Source Code</DropButton>
            </div>
        </div>
    </>
}