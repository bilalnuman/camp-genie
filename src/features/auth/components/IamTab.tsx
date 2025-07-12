"use client"
import { Button } from '@heroui/react'
import clsx from 'clsx'
import React, { useState } from 'react'
interface IamTab {
    onClick: any,
}
const IamTab = ({ onClick }: IamTab) => {
    const [active, setActive] = useState(1)
    const classes = `font-medium !h-[75px] !rounded-xl flex-1 rounded-md h-[75px] gap-1 flex text-green-1000 justify-center !text-[15px] !text-dark-1000 !bg-white border !border-orange-1000 flex-col`
    return (
        <div className="flex items-center justify-between gap-5">
            <Button onPress={() => { setActive(0); onClick("family") }} className={clsx(classes, active ? "" : "!bg-orange-1000 !text-white")}>
                <span className='font-semibold'>Family</span>
                <span className='font-normal'>Looking for Camps</span>
            </Button>
            <Button onPress={() => { setActive(1); onClick("camp_rovider") }} className={clsx(classes, active ? "!bg-orange-1000 !text-white" : "")}>
                <span className='font-semibold'>Camp Provider</span>
                <span className='font-normal'>Offering Camps</span>
            </Button>
        </div >
    )
}

export default IamTab

