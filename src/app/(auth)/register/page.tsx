"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import logo from "@/assets/images/logo.png"
import Heading from '@/shared/Heading'
import FormTab from '@/features/auth/components/Tabs'
import lineImg from "@/assets/images/line.png"
import RegistrationForm from '@/features/auth/components/RegistrationForm'
import IamTab from '@/features/auth/components/IamTab'
import FormGreenSide from '@/features/auth/components/FormGreenSide'
import FormWrapper from '@/features/auth/components/FormWrapper'
import SocialButtons from '@/features/auth/components/SocialButtons'

const page = () => {
    const [registerType, setRegisterType] = useState<string>("camp_rovider")
    return (
        <div className='flex justify-between xl:p-6 p-3 ps-0'>
            <FormWrapper>
                <Image src={logo} alt='logo' width={114} height={67} />
                <div className='xl:pt-[40px] pt-[30px] font-montserrat'>
                    <Heading label='Join Camp Genie' className='mb-2' />
                    <FormTab />
                    <div className='text-gray-500 my-3 text-base'>Fill your Information and location to sign up
                        your account.</div>
                </div>
                <div className='mb-5'>
                    <label htmlFor="" className='text-base font-medium text-dark-1000 mb-1 block'>I’m a</label>
                    <IamTab onClick={(val: string) => setRegisterType(val)} />
                </div>
                <RegistrationForm registerType={registerType} />
                <div className=' relative w-full h-4 my-6'>
                    <Image src={lineImg} alt='line' fill />
                </div>
                <SocialButtons />
            </FormWrapper>
            <FormGreenSide />
        </div>
    )
}

export default page