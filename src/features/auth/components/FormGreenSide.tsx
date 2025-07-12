import Icon from '@/shared/Icon'
import React from 'react'
interface PropsTypes {
    heading?: string,
    image?: any,
    imageStyle?: React.CSSProperties,
    imageClassName?: string
}
import defaultImage from '@/assets/images/conical.png'
import clsx from 'clsx'
const FormGreenSide = ({ heading, image = defaultImage, imageStyle, imageClassName }: PropsTypes) => {
    heading = `Welcome to the Engineering Program and Teacher Portal Designed for All Educational Institutions!`
    return (
        <section
            className='sticky top-3 bg-green-1000 flex-1 rounded-lg max-w-[704px] 
             xl:px-12 lg:px-7 px-4 xl:pt-[100px] lg:pt-10 pt-8 xl:pb-12 lg:pb-7 pb-4 
             flex justify-center items-center h-[calc(100vh_-_1.5rem)]'
        >
            <div className={clsx(`bg-[#B7E9F640] max-w-[600px] flex-1 rounded-lg
    flex flex-col items-center gap-2 bg-no-repeat conical-image h-full w-full xl:pt-7 pt-5`, imageClassName)}
                style={{ backgroundImage: `url(${image?.src})`, ...imageStyle }} >
                <Icon name='glob' className='xl:w-16 xl:h-16 w-8 h-8' />
                <h3 className='max-w-[350px] text-center font-urbanist font-medium xl:text-xl text-white'>
                    {heading}
                </h3>
            </div>
        </section>
    )
}

export default FormGreenSide