"use client"
import { Controller } from "react-hook-form";
import { usePasswordValidater, useResetPassword } from "../hooks";
import InputField from "@/shared/InputField";
import FormButton from "./FormButton";

const ResetForm = () => {
  const { control, apiRes, resetPassword, watch } = useResetPassword();
  const confirmPasswrd = usePasswordValidater(watch)

  return (
    <form className="pt-5" onSubmit={resetPassword} noValidate>
      <fieldset className="flex flex-col gap-4">
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
        <Controller
          name="confirmPassword"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <InputField
              {...field}
              error={confirmPasswrd}
              secureTextEntry
              enablePasswordToggle
              label="Confirm Password"
            />
          )}
        />
        <div className="text-[13px] font-medium text-gray-400 text-end font-montserrat">Both Password Must Match.</div>
      </fieldset>
      <FormButton Label="update password" isLoading={apiRes.isPending} />
    </form>
  );
};

export default ResetForm