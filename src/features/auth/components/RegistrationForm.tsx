"use client"
import { Controller } from "react-hook-form";
import InputField from "@/shared/InputField";
import Icon from "@/shared/Icon";
import { useSignUp } from "../hooks";
import FormButton from "./FormButton";

const RegistrationForm = (registerType: any) => {
    const { control, signUp, apiRes } = useSignUp(registerType);
    return (
        <form onSubmit={signUp}>
            <fieldset className="flex flex-col gap-4">
                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({ field, fieldState }) => (
                        <InputField
                            {...field}
                            error={fieldState?.error?.message}
                            label="Camp Name"
                        />
                    )}
                />
                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({ field, fieldState }) => (
                        <InputField
                            {...field}
                            error={fieldState?.error?.message}
                            label="Name"
                        />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field, fieldState }) => (
                        <InputField
                            {...field}
                            error={fieldState?.error?.message}
                            secureTextEntry
                            enablePasswordToggle
                            label="Password"
                        />
                    )}
                />
            </fieldset>
            <FormButton Label="sign up" isLoading={apiRes.isPending} />
        </form>
    );
};

export default RegistrationForm