import Image from 'next/image'
import React from 'react'
import logo from "@/assets/images/logo.png"
import Heading from '@/shared/Heading'
import FormGreenSide from '@/features/auth/components/FormGreenSide'
import formImage from "@/assets/images/lock-screen.png"
import ResetForm from '@/features/auth/components/ResetForm'
import FormWrapper from '@/features/auth/components/FormWrapper'
const page = () => {

    return (
        <div className='flex justify-between xl:p-6 p-3 ps-0 items-center'>
            <FormWrapper>
                <Image src={logo} alt='logo' width={114} height={67} />
                <div>
                    <div className='xl:pt-[70px] lg:pt-[50px] pt-[30px] font-montserrat'>
                        <Heading label='Create New Password' />
                        <div className='text-gray-500'>Your new password must be different from previous used password.</div>
                    </div>
                    <ResetForm />
                </div>
            </FormWrapper>
            <FormGreenSide image={formImage} imageStyle={{ backgroundSize: "70%" }} />
        </div>
    )
}

export default page