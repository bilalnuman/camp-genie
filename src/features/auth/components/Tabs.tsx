"use client"
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const FormTab = () => {
    const path = usePathname()
    const classes = `text-center font-medium flex-1 rounded-md h-full flex items-center text-green-1000 justify-center`
    return (
        <div className="flex w-full h-[60px] rounded-xl border border-green-1000 p-2 items-center justify-between">
            <Link href="/login" className={clsx(classes, path === "/login" && "bg-green-1000 !text-white")}>Login</Link>
            <Link href="/register" className={clsx(classes, path === "/register" && "bg-green-1000 !text-white")}>Register</Link>
        </div >
    )
}

export default FormTab

