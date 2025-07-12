import { Button } from '@heroui/react'
import React from 'react'
interface FormButtonProps {
    isLoading?: boolean,
    Label: string
}
const FormButton = ({ isLoading, Label }: FormButtonProps) => {
    return (
        <Button isLoading={isLoading} className="w-full min-h-[54px] mt-6 bg-orange-1000 uppercase text-white font-semibold" type="submit">{Label}</Button>
    )
}

export default FormButton