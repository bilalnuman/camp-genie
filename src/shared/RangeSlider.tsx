"use client";

import React from "react";
import { Slider } from "@heroui/react";
import Icon from "./Icon";
interface PropsTypes {
range: [number, number];
    onChange?: (val: [number, number]) => void;

}
export default function RangeSlider({ onChange, range }: PropsTypes) {
    const [value, setValue] = React.useState<[number, number]>(range);

    React.useEffect(() => {
        setValue(range); // update local state when `range` changes from props (on reload)
    }, [range]);

    const handleChange = (val: number | number[]) => {
        if (Array.isArray(val) && val.length === 2) {
            const newValue = val as [number, number];
            setValue(newValue);
            onChange?.(newValue);
        }
    };

    return (
        <div className="flex flex-col gap-2 w-full max-w-md">
            <div className="font-medium text-[15px] text-dark-900">Price Range</div>
            <div className="text-green-1000 font-semibold text-sm flex items-center justify-end gap-4">
                <span className="flex items-baseline">
                    <Icon name="dollar" />
                    <span className="relative -top-[2px]">{value[0]}</span>
                </span>
                –
                <span className="flex items-center">
                    <Icon name="dollar" />
                    <span className="relative -top-[2px]">{value[1]}</span>
                </span>
            </div>

            <Slider
                minValue={0}
                maxValue={1000}
                step={10}
                value={value}
                onChange={handleChange}
                classNames={{
                    filler: "bg-green-1000",
                    track: "bg-green-1000/30 h-[6px]",
                    thumb:
                        "bg-transparent after:bg-green-1000 after:border-2 after:border-white after:h-4 after:w-4",
                }}
            />
        </div>
    );
}

