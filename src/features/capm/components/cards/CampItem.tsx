import React, { useMemo } from 'react'
import img from "@/assets/images/img_1.png"
import Icon from '@/shared/Icon'
import { useGetCamps } from '../../hooks/QueryHook';
import { defaultFilters, useCampHook } from '../../hooks';
import { LikeButton } from '@/shared/LikeButton';
import TagLine from '@/shared/TagLine';
import OrangeLinkButton from '@/shared/OrangeLinkButton';
const CampItem = () => {
    const { filters } = useCampHook()

    const isFiltersReady = useMemo(() => {
        return filters !== defaultFilters;
    }, [filters]);

    const { data, isLoading } = useGetCamps(filters, {
        enabled: isFiltersReady,
    });

    return (
        <div className='flex-1 grid lg:grid-cols-2 sm:grid-cols-2 xl:gap-10 lg:gap-6 gap-5 h-fit'>
            {Array.from({ length: 1 }).map((_, index) => (
                <div className="pb-4 overflow-hidden flex-1 rounded-xl bg-white" key={index}>
                    <div className='h-[230px] bg-cover bg-no-repeat'
                        style={{ backgroundImage: `url(${img.src})` }}
                    >
                        <div className='flex items-center justify-between p-3'>
                            <LikeButton />
                            <TagLine label='Day Camp' className='!bg-white !text-green-800' />
                        </div>
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
                            <TagLine label='Adventures' className='!border-green-900 !font-medium !bg-green-900 !py-1.5' />
                            <TagLine label='STEM' className='!border-green-900 !font-medium !bg-green-900 !py-1.5' />
                            <TagLine label='Nature' className='!border-green-900 !font-medium !bg-green-900 !py-1.5' />
                        </div>
                        <div className='flex items-center gap-2 mt-1'>
                            <TagLine label='Age Group: 5-10' className='!bg-white !text-green-900 !border-green-900 xl:!text-[10px] !text-[8px] !font-medium !py-1.5' />
                            <TagLine label='Early Bird Discount: 10%' className='!bg-white !text-green-900 !border-green-900 xl:!text-[10px] !text-[8px] !font-medium !py-1.5' />
                            <TagLine label='Instant Booking' icon='point' size='11' iconClassName='text-[6px]' className='!bg-white !text-green-900 !border-green-900 xl:!text-[10px] !text-[8px] !font-medium !py-1.5' />
                        </div>
                        <div className='flex items-center justify-between mt-1.5'>
                            <div className='flex items-baseline font-semibold'>
                                <span className='text-orange-1000 text-2xl'>$300</span>
                                <span className='text-xs text-dark-200'>/Week</span>
                            </div>
                            <OrangeLinkButton href={"#"} label='View Details' className='!min-h-[35px] text-xs'/>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default CampItem