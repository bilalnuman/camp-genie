import Image from 'next/image'
import React from 'react'
import logo from "@/assets/images/logo.png"
import Heading from '@/shared/Heading'
import FormTab from '@/features/auth/components/Tabs'
import LoginForm from '@/features/auth/components/LoginForm'
import lineImg from "@/assets/images/line.png"
import FormGreenSide from '@/features/auth/components/FormGreenSide'
import FormWrapper from '@/features/auth/components/FormWrapper'
import SocialButtons from '@/features/auth/components/SocialButtons'

const page = () => {

  return (
    <div className='flex justify-between xl:p-6 p-3 ps-0'>
      <FormWrapper>
        <Image src={logo} alt='logo' width={114} height={67} />
        <div className='xl:pt-[70px] lg:pt-[50px] pt-[30px] font-montserrat'>
          <Heading label='Welcome Back to Camp Genie' className='mb-4' />
          <FormTab />
          <div className='text-gray-500 mt-4'>Fill your email address and password to sign in
            your account.</div>
        </div>
        <LoginForm />
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