import React, { useState } from 'react';
import styles from "./index.module.css";
interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    containerClass?: string;
    iconColor?: string;
    labelClass?: string;
    placholderClass?: string;
    inputWrapperClass?: string;
    starClass?: string;
    inputClass?: string;
    floatClass?: string;
    floatLabel?: boolean;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    enablePasswordToggle?: boolean;
    secureTextEntry?: boolean;
    value?: string;
    autocomplete?: any,
    required?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
}


const FormInput: React.FC<FormInputProps> = ({
    label,
    error,
    containerClass = '',
    floatClass = '',
    labelClass = '',
    inputWrapperClass = '',
    starClass = '',
    iconColor = "#ccc",
    placholderClass = '',
    inputClass = '',
    floatLabel = false,
    required = false,
    autocomplete = "",
    icon,
    iconPosition = 'left',
    enablePasswordToggle,
    secureTextEntry,
    type = 'text',
    value,
    onChange,
    onBlur,
    placeholder,
    ...rest
}) => {
    const [focused, setFocused] = useState(false);
    const [secure, setSecure] = useState<boolean>(!!secureTextEntry);
    const hasValue = !!value && value.length > 0;
    const showFloating = focused || hasValue;
    const isPassword = secureTextEntry || enablePasswordToggle;
    const labelStyle =
        showFloating && floatLabel
            ? styles.focusd
            : floatLabel
                ? styles.floatLabel
                : styles.label;

    return (
        <div className={`${styles.container} ${containerClass}`}>
            {label && (
                <label htmlFor={label} className={`${labelStyle} ${floatLabel ? floatClass : labelClass}`}>
                    {label}
                    <sup className={`${styles.star} ${starClass}`}>*</sup>
                </label>
            )}

            <div className={`${styles.inputWrapper} ${inputWrapperClass}`}>
                {icon && iconPosition === 'left' && (
                    <div className={`${styles.iconContainer} ${iconColor}`} style={{ left: "8px" }}>{icon}
                    </div>
                )}

                <input
                    type={isPassword && secure ? 'password' : 'text'}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setFocused(true)}
                    id={label}
                    onBlur={() => {
                        setFocused(false);
                        onBlur?.();
                    }}
                    placeholder={placeholder || label}
                    className={`${styles.input} ${error ? styles.error : ""} ${inputClass} ${placholderClass}`}
                    style={{ paddingLeft: icon && iconPosition === 'left' ? "2rem" : "" }}
                    {...rest}
                    autoComplete={autocomplete}
                />

                {enablePasswordToggle && (
                    <button
                        type="button"
                        className={styles.passwordToggle}
                        onClick={() => setSecure(!secure)}
                    >
                        {secure ?
                            <svg stroke={iconColor} fill={iconColor} strokeWidth="0" viewBox="0 0 24 24" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 6a9.77 9.77 0 0 1 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5A9.77 9.77 0 0 1 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"></path></svg>
                            :
                            <svg stroke={iconColor} fill={iconColor} strokeWidth="0" viewBox="0 0 1024 1024" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z"></path><path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z"></path></svg>}
                    </button>
                )}

                {icon && iconPosition === 'right' && (
                    <div className={`${styles.iconContainer} ${iconColor}`} style={{ right: "8px" }}>{icon}</div>
                )}
            </div>

            {error && <p className={styles.error}>{error}</p>}
        </div>
    );
};

export default FormInput;
