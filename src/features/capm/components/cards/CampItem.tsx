import React from 'react'
import img from "@/assets/images/img_1.png"
import Icon from '@/shared/Icon'
import OrangeButton from '@/shared/OrangeButton'
const CampItem = () => {
    return (
        <div className='flex-1 grid lg:grid-cols-2 sm:grid-cols-2 xl:gap-10 lg:gap-6 gap-5'>
            {Array.from({ length: 10 }).map((_, index) => (
                <div className="pb-4 overflow-hidden flex-1 rounded-xl bg-white" key={index}>
                    <div className='h-[230px] bg-cover bg-no-repeat'
                        style={{ backgroundImage: `url(${img.src})` }}
                    >
                    </div>
                    <div className='px-3 flex flex-col mt-2.5 gap-2'>
                        <div className='flex items-center justify-between'>
                            <div className='text-dark-900 text-sm font-semibold'>Adventure Quest Camp</div>
                            <div className='text-xs font-medium text-gray-300 flex items-center gap-2'>
                                <Icon name='calendar' />
                                July 10-14</div>
                        </div>
                        <div className='text-xs font-medium text-gray-300 flex gap-3'>
                            <Icon name='location' /> Lake Tahoe, CA • 12 miles away
                        </div>
                        <div className='text-dark-200 text-[10px]'>Outdoor adventures with hiking, swimming, and team building activities.</div>
                        <div className='flex items-center gap-2 mt-1'>
                            <div className='bg-green-900 text-white text-[10px] font-medium rounded-full px-4 py-1.5'>Adventures</div>
                            <div className='bg-green-900 text-white text-[10px] font-medium rounded-full px-4 py-1.5'>STEM</div>
                            <div className='bg-green-900 text-white text-[10px] font-medium rounded-full px-4 py-1.5'>Nature</div>
                        </div>
                        <div className='flex items-center gap-2 mt-1'>
                            <div className='border border-green-900 text-green-900 sm:text-[10px] text-[8px] font-semibold rounded-full xl:px-4 px-2 py-1.5'>Age Group: 5-10</div>
                            <div className='border border-green-900 text-green-900 sm:text-[10px] text-[8px] font-semibold rounded-full xl:px-4 px-2 py-1.5'>Early Bird Discount: 10%</div>
                            <div className='border border-green-900 text-green-900 sm:text-[10px] text-[8px] font-semibold rounded-full xl:px-4 px-2 py-1.5 flex gap-2'>
                                <Icon name='point' />
                                Instant Booking
                            </div>
                        </div>
                        <div className='flex items-center justify-between mt-1.5'>
                            <div className='flex items-baseline font-semibold'>
                                <span className='text-orange-1000 text-2xl'>$300</span>
                                <span className='text-xs text-dark-200'>/Week</span>
                            </div>
                            <OrangeButton label='View Details' />
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default CampItem