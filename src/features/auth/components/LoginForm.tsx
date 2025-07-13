"use client"
import { Controller } from "react-hook-form";
import { useSignIn } from "../hooks";
import InputField from "@/shared/InputField";
import Link from "next/link";
import { Checkbox } from "@heroui/checkbox";
import FormButton from "./FormButton";
const LoginForm = () => {
    const { control, apiRes, signIn } = useSignIn();

    return (
        <form className="pt-5" onSubmit={signIn} noValidate>
            <fieldset className="flex flex-col gap-4">
                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field, fieldState }) => (
                        <InputField
                            {...field}
                            placeholder="Email"
                            label="Email"
                            type="email"
                            error={fieldState.error?.message}
                            required
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
                            placeholder="Password"
                            error={fieldState?.error?.message}
                            secureTextEntry
                            mt-5 mb-1 enablePasswordToggle
                            label="Password"
                        />
                    )}
                />
            </fieldset>
            <div className="flex items-center justify-between font-medium text-[13px] text-gray-400 mt-5 mb-1">
                <Checkbox onChange={(val) => console.log(val.target.checked)} defaultSelected><span className="font-medium text-[13px] text-gray-400">Remember me</span></Checkbox>
                <Link href="/reset-password">Forgot password?</Link>
            </div>
            <FormButton Label="Login" isLoading={apiRes.isPending} />

        </form>
    );
};

export default LoginForm