import React from 'react'
import clsx from "clsx"
interface Props {
    label: string;
    className?: string;
}
const Heading = ({ label, className }: Props) => {
    return (
        <h3 className={clsx("font-montserrat font-semibold xl:text-2xl text-xl text-dark-1000", className)}>{label}</h3>
    )
}

export default Heading