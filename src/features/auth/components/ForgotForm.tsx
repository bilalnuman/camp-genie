"use client"
import { Controller } from "react-hook-form";
import FormInput from "@/shared/InputField";
import FormButton from "./FormButton";
import { useForgotPassword } from "../hooks";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

const ForgotForm = () => {
  const { control, apiRes, submit } = useForgotPassword();
  const router = useRouter();

  return (
    <form className="pt-5" onSubmit={submit} noValidate>
      <fieldset className="flex flex-col gap-4">
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field, fieldState }) => (
            <FormInput
              {...field}
              error={fieldState?.error?.message}
              label="Email"
            />
          )}
        />
      </fieldset>

      <FormButton Label="update password" isLoading={apiRes.isPending} />
      <Button onPress={() => router.push("/login")} className="w-full mt-5 text-orange-1000 bg-white min-h-[54px] font-semibold text-base border border-orange-1000">Back to login</Button>

    </form>
  );
};

export default ForgotForm