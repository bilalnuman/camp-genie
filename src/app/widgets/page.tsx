"use client"
import { LikeButton } from '@/shared/LikeButton'
import ModalWrapper from '@/shared/ModalWrapper'
import NothingFound from '@/shared/NothingFound'
import TagLine from '@/shared/TagLine'
import React from 'react'

const widgets = () => {
  return (
    <>
    <div className='hidden'>
      <ModalWrapper
        triggerLabel="Login"
        triggerClassName="bg-blue-500 text-white"
        title="Login Form"
        confirmLabel="Submit"
        // onConfirm={handleSubmit}
        confirmButtonProps={{ color: "success" }}
        cancelButtonProps={{ color: "secondary" }}
      >
        <form>
          {/* form fields here */}
        </form>
      </ModalWrapper>
      <ModalWrapper
        triggerLabel="Register"
        triggerClassName="bg-blue-500 text-white"
        title="Registration Form"
        confirmLabel="Submit"
        // onConfirm={handleSubmit}
        confirmButtonProps={{ color: "success" }}
        cancelButtonProps={{ color: "secondary" }}
      >
        <form>
          {/* form fields here */}
        </form>
      </ModalWrapper>
      <LikeButton onPress={() => console.log("Liked")} />
        <TagLine label='Tag line here'/>
      <NothingFound />
    </div>
    </>
  )
}

export default widgets