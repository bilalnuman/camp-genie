"use client"
import React from 'react'
import { signIn } from "next-auth/react"
import { Button } from '@heroui/react'
import google from "@/assets/google.png"
import facebook from "@/assets/facebook.png"
import Image from 'next/image'
const SocialButtons = () => {
    const buttonStyle = "flex-1 bg-white min-h-[50px] flex items-center gap-3 text-base font-medium text-dark-1000 border border-orange-1000"
    return (
        <div className="flex gap-3 mb-5">
            <Button className={buttonStyle} onPress={() => signIn('google')}>
                <Image src={google.src} alt='Google' width={20} height={20} />
                Google</Button>
            <Button className={buttonStyle} onPress={() => signIn('facebook')}>
                <Image src={facebook.src} alt='Facebook' width={20} height={20} />
                Facebook</Button>
        </div>
    )
}

export default SocialButtons