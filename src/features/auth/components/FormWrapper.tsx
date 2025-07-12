import React, { ReactNode } from 'react'

const FormWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <section className='flex-1 xl:min-h-[calc(100vh-50px)] min-h-[calc(100vh-24px)]'>
            <div className='xl:ps-20 lg:ps-16 md:ps-8 ps-3 xl:max-w-[515px] lg:max-w-[500px] sm:mx-0 mx-auto'>
                {children}
            </div>
        </section>
    )
}

export default FormWrapper