"use client"
import React from 'react';
import whiteLogo from '@/assets/images/white-logo.png';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/shared/Icon';
export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="h-screen flex flex-col overflow-hidden">
            <header className="sticky top-0 z-50 bg-green-800 shadow ps-[78px] h-[90px] flex items-center">
                <Image src={whiteLogo.src} alt="Camp Genie Logo" width={80} height={50} />
                <div className='xl:ps-20 ps-16'>
                    <div className='text-white'>
                        <div className='text-xl font-semibold'>Adventure Quest Camp Dashboard</div>
                        <div className='text-xs'>Manage your camp operations and registrations</div>
                    </div>
                </div>
            </header>

            <div className="flex">
                <aside className="bg-green-800 hidden sticky top-[64px] h-[calc(100vh-64px)] xl:w-64 w-[200px] p-4 border-r overflow-y-auto md:flex flex-col justify-between">
                    <nav className="space-y-6 pt-3">
                        <Link href="#" className="flex items-center xl:gap-5 gap-3 text-sm text-white hover:text-orange-1000">
                            <Icon name="programs" className="fill-white group-hover:fill-[#f48403] w-[20px] h-[20px]" />
                            Dashboard</Link>
                        <Link href="#" className="flex items-center xl:gap-5 gap-3 text-sm text-white hover:text-orange-1000">
                            <Icon name="programs" className="fill-white group-hover:fill-[#f48403] w-[20px] h-[20px]" />
                            Application-based (2)</Link>
                        <Link href="#" className="flex items-center xl:gap-5 gap-3 text-sm text-white hover:text-orange-1000">
                            <Icon name="programs" className="fill-white group-hover:fill-[#f48403] w-[20px] h-[20px]" />
                            Registrations</Link>
                        <Link href="#" className="flex items-center xl:gap-5 gap-3 text-sm text-white hover:text-orange-1000">
                            <Icon name="programs" className="fill-white group-hover:fill-[#f48403] w-[20px] h-[20px]" />
                            Pending Updates</Link>
                        <Link href="#" className="flex items-center xl:gap-5 gap-3 text-sm text-white hover:text-orange-1000">
                            <Icon name="programs" className="fill-white group-hover:fill-[#f48403] w-[20px] h-[20px]" />
                            Badges</Link>
                    </nav>
                    <button className='flex items-center justify-center xl:gap-5 gap-3 text-sm text-white hover:text-orange-1000 pb-5'>
                        <Icon name="logout" className="fill-white group-hover:fill-[#f48403] w-[20px] h-[20px]" />
                        Logout
                    </button>
                </aside>
                <section className="flex-1 h-[calc(100vh-64px)] overflow-y-auto p-4">
                    {children}
                </section>
            </div>
        </main>
    );
}
