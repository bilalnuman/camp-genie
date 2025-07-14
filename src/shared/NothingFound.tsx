import React from 'react'
import Heading from './Heading'
import cart from "@/assets/cart.png"
import Image from 'next/image'
import dynamic from 'next/dynamic';
import OrangeLinkButton from './OrangeLinkButton';

const CampWrapper = dynamic(() => import("@/features/capm/components/CampWrapper"), {
    ssr: true,
    loading: () => <div>Loading...</div>,
});

const NothingFound = () => {
    return (
        <CampWrapper>
            <div className='flex flex-col gap-y-4 text-center justify-center bg-white xl:max-w-[1060px] max-w-[900px] mx-auto w-full py-[40px]'>
                <div className='xl:w-[180px] xl:h-[180x] w-[160px] h-[160px] rounded-full bg-green-800/20 flex justify-center items-center p-3 m-auto'>
                    <Image src={cart.src} alt="" width={205} height={205} className='xl:w-[160px] xl:h-[160px] w-[140px] h-[140px]' />
                </div>
                <Heading
                    heading="Nothing found!"
                    subHeading='Looks like you haven’t added anything to your cart yet.'
                />
                <OrangeLinkButton href="/" label='start browsing' className='min-w-[300px]' />
            </div>
            <input
                type="text"
                placeholder="Confirm Password"
                className="h-[54px] w-full border border-[#DCDCDC] rounded-md px-4 text-sm text-dark-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

        </CampWrapper>
    )
}

export default NothingFound