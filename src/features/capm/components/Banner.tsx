import React from 'react'
import BannerImage from "@/assets/images/camp-banner.png"
const Banner = () => {
    return (
        <div className='h-[400px] bg-contain bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${BannerImage.src})` }}
        >
        </div>
    )
}

export default Banner