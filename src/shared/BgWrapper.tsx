import React from 'react'
import bg from "@/assets/images/bg.png"
const BgWrapper = () => {
    return (
        <div
        className='-mt-1 bg-cover h-full w-screen min-h-screen flex justify-center items-center'
            style={{
                backgroundImage: `url(${bg.src})`
            }}
        >BgWrapper</div>
    )
}

export default BgWrapper