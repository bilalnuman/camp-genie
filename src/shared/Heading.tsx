import React from "react";
import clsx from "clsx";

interface HeadingProps {
    heading: string;
    subHeading?: string;
    className?: string;
    headingClassName?: string;
    subHeadingClassName?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading: React.FC<HeadingProps> = ({
    heading,
    subHeading,
    className,
    headingClassName,
    subHeadingClassName,
    as: Tag = "h3",
}) => {
    if (!heading && !subHeading) return null;

    return (
        <div className={clsx("flex flex-col gap-1 font-montserrat", className)}>
            {heading && (
                <Tag
                    className={clsx(
                        "font-semibold text-xl xl:text-3xl text-dark-900",
                        headingClassName
                    )}
                >
                    {heading}
                </Tag>
            )}
            {subHeading && (
                <p
                    className={clsx(
                        "text-dark-200",
                        subHeadingClassName
                    )}
                >
                    {subHeading}
                </p>
            )}
        </div>
    );
};

export default Heading;
