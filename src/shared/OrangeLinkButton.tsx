"use client";

import clsx from "clsx";
import Link from "next/link";
import React, { AnchorHTMLAttributes } from "react";
import { UrlObject } from "url";

type AnchorType = string | UrlObject;

interface OrangeLinkButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
    label: string;
    href: AnchorType;
    className?: string;
}

const OrangeLinkButton: React.FC<OrangeLinkButtonProps> = ({
    label,
    href,
    className,
    ...rest
}) => {
    return (
        <Link href={href}
            className={clsx(
                "bg-orange-900 border capitalize font-montserrat hover:opacity-70 w-fit duration-300 border-orange-900 text-white px-4 min-h-[50px] flex items-center justify-center rounded-lg font-semibold",
                className
            )}
            {...rest}
        >
            {label}
        </Link>
    );
};

export default OrangeLinkButton;
 