import React from "react";
import { Button } from "@heroui/react";
import clsx from "clsx";
import Icon from "./Icon";

interface LikeButtonProps {
    className?: string;
    iconClassName?: string;
    onPress?: () => void;
    ariaLabel?: string;
}

export const LikeButton: React.FC<LikeButtonProps> = ({
    className,
    iconClassName,
    onPress,
    ariaLabel = "Like",
}) => {
    return (
        <Button
            aria-label={ariaLabel}
            onPress={onPress}
            variant="light"
            className={clsx(
                "min-w-[30px] bg-white h-[30px] p-0 rounded-full hover:bg-white/90",
                className
            )}
        >
            <Icon name="heart" className={clsx("text-green-800", iconClassName)} />
        </Button>
    );
};
