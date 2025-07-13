"use client"
import { Button, ButtonProps } from '@heroui/react'
import clsx from 'clsx'
import React from 'react'

interface Props extends ButtonProps {
    label: string
    className?: string
}

const OrangeButton = ({ label, className, ...rest }: Props) => {
    return (
        <Button
            className={clsx(
                "bg-orange-1000 border border-orange-1000 text-white !rounded-lg !font-semibold !text-sm",
                className
            )}
            {...rest}
        >
            {label}
        </Button>
    )
}

export default OrangeButton
