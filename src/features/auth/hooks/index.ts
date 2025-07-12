import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ForgotPasswordSchema, ResetPasswordSchema, SignInFormValues, SignInSchema, SignupSchema } from "../schemas";
import { useEffect, useState } from "react";
import { useSignin } from "./QueryHook";

export const useSignUp = ({registerType}:any) => {

    const {
        handleSubmit,
        control,
        watch,
        reset,
        trigger,
        formState: { errors },
    } = useForm<any>({
        resolver: zodResolver(SignupSchema),
        mode: "onChange"
    });

    console.log(registerType)

    const signUp = handleSubmit((data) => console.log(data, "signup"))

    useEffect(() => {
        return () => {
            reset();
            trigger();
        }
    }, [reset, trigger])
    const apiRes = { isPending: false }
    return {
        control,
        signUp,
        watch,
        reset,
        apiRes
    };

}

export const useSignIn = () => {
    const { mutateAsync: signin, data, isPending, isError, error } = useSignin()
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<any>({
        resolver: zodResolver(SignInSchema),
        mode: "onChange"
    });

    const signIn = handleSubmit((data: SignInFormValues) => {
        signin(data, {
            onSuccess: async (data: any) => {
                if (data?.data?.access_token) {
                }
                reset()
            },
            onError: (error: any) => {
                const message = error?.errors?.non_field_errors?.toString()
            }
        })
    })

    useEffect(() => {
        return () => {
            reset();
        }
    }, [reset])

    const apiRes = { data, isPending, isError, error }

    return {
        control,
        errors,
        signIn,
        apiRes
    };
}

export const useForgotPassword = () => {

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<any>({
        resolver: zodResolver(ForgotPasswordSchema),
        mode: "onChange"
    });

    const submit = handleSubmit((data) => console.log(data))
    useEffect(() => {
        return () => {
            reset();
        }
    }, [reset])
    const apiRes = { isPending: false }
    return {
        control,
        errors,
        submit,
        apiRes
    };
}

export const useOtp = () => {

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<any>({
        resolver: zodResolver(ForgotPasswordSchema),
        mode: "onChange"
    });

    const submit = handleSubmit((data) => console.log(data))
    useEffect(() => {
        return () => {
            reset();
        }
    }, [reset])
    const apiRes = { isPending: false }
    return {
        control,
        errors,
        submit,
        apiRes
    };
}

export const useResetPassword = () => {

    const {
        handleSubmit,
        control,
        watch,
        reset,
        formState: { errors },
    } = useForm<any>({
        resolver: zodResolver(ResetPasswordSchema),
        mode: "onChange"
    });

    const resetPassword = handleSubmit((data) => console.log(data))
    useEffect(() => {
        return () => {
            reset();
        }
    }, [reset])
    const apiRes = { isPending: false }
    return {
        control,
        errors,
        resetPassword,
        watch,
        apiRes
    };
}

export const usePasswordValidater = (watch: any) => {
    const [passwordMatch, setPasswordMatch] = useState(true)

    useEffect(() => {
        const subscription = watch((value: any) => {
            const password = value.password
            const confirmPassword = value.confirmPassword
            confirmPassword && setPasswordMatch(password === confirmPassword && password !== undefined && password !== '')
        })

        return () => subscription.unsubscribe()
    }, [watch])

    return passwordMatch ? "" : "Passwords do not match.";
}