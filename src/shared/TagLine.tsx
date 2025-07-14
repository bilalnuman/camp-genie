import clsx from 'clsx';
import React from 'react'
import Icon from './Icon';
interface Props {
    className?: string;
    label: string
    icon?: string,
    iconClassName?: string,
    size?: string
}
const TagLine = ({ className, label, iconClassName, icon, size }: Props) => {
    return (
        <div className={clsx("px-3 flex items-center gap-1 py-2 w-fit justify-items-center text-center font-montserrat rounded-full bg-orange-900 cursor-default duration-300 text-white font-semibold text-[10px] border border-transparent", className)}>
            <Icon name={icon!} className={clsx("", iconClassName)} size={size} />
            {label}</div>
    )
}

export default TagLine