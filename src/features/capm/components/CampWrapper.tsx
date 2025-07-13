import React, { ReactNode } from 'react'
import CampFilters from './CampFilters'
import Header from './Header'
import Banner from './Banner'

const CampWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <div className='bg-[rgba(242,248,255,0.8)] min-h-screen'>
            <Header />
            {/* <Banner /> */}
            <div className='xl:ps-20 lg:px-14 md:px-6 sm:px-8 px-4 flex xl:gap-10 lg:gap-6 gap-4 py-5 max-w-[1440px] mx-auto'>
                <CampFilters />
                {children}
            </div>
        </div>
    )
}

export default CampWrapper