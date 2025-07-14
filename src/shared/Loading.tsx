import { Spinner } from '@heroui/react'
import clsx from 'clsx'
import React from 'react'
interface Props {
    className?: string,
}
const Loading = ({ className }: Props) => {
    return (
        <div className={clsx("h-[calc(100vh-4rem)] flex justify-center items-center", className)}>
            <Spinner />
        </div>
    )
}

export default Loading