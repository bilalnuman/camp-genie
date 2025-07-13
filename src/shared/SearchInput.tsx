"use client";
import React, { ChangeEvent, ReactNode, useState } from "react";
import InputField from "./InputField";
import Icon from "./Icon";

interface PropsTypes {
    label?: string;
    placeholder?: string;
    onChange?: (val: string) => void;
    value?: string,
    inputClass?: string
    icon?: ReactNode,
    paramKey: string
}

const SearchInput = ({ label = "Search", inputClass = "!min-h-11", value, paramKey, placeholder = "Enter camp name", onChange,
    icon = <Icon name="search" />
}: PropsTypes) => {
    const params = new URLSearchParams(window.location.search);
    const search = params.get(paramKey);
    const [inputValue, setInputValue] = useState<string>(search! || "");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        onChange?.(e.target.value)
    };
    return (
        <InputField
            inputClass={inputClass}
            label={label}
            placeholder={placeholder}
            icon={icon}
            value={inputValue}
            onChange={handleChange}
        />
    );
};

export default SearchInput;
