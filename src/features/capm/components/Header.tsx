import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "@/assets/images/logo.png"
import clsx from 'clsx'
const Header = () => {
  return (
    <header className='h-[70px] border-b flex items-center justify-between xl:ps-20 lg:px-14 md:px-6 sm:px-8 px-4'>
      <Link href="/">
        <Image src={logo.src} alt='lgo' width={80} height={50} />
      </Link>
      <nav className='flex items-center gap-7'>
        <Link href="/" className={clsx("font-medium text-dark-900 font-montserrat")}>Home</Link>
        <Link href="/" className={clsx("font-medium text-dark-900 font-montserrat")}>About us</Link>
        <Link href="/" className={clsx("font-medium text-dark-900 font-montserrat")}>Contact us</Link>
      </nav>
      <div>Logo</div>
    </header>
  )
}

export default Header