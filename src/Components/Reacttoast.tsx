import React from 'react'
import { Flip, toast } from 'react-toastify'

export default function ShowMessage() {
    toast.success('Message Send Succesfully!', {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Flip,
    })
}


