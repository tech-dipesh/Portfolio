import React, { useState } from 'react'

export default function Contact() {
  const [value, setValue]=useState({
    name: '',
    email: '',
    Message: ''
  })

  const [error, setError]=useState({
    name: '',
    email: '',
    Message: ''
  })

  const submitForm=(e)=>{
    e.preventDefault();
    console.log('input value is', value);
    console.log('error', error);
    if(!error.name){
        setError(prev=>({prev, name: 'Please Enter your name.'}))
        return
      }
    if(!error.email){
        setError(prev=>({prev, email: 'Please Enter your Email.'}))
        return
      }
    if(!error.Message){
        setError(prev=>({prev, email: 'Please Enter your Message.'}))
        return
    }
    setValue({
      name: '',
      email: '',
      Message: ''
    })
    setError({
    name: '',
    email: '',
    Message: ''
    })


  }

  return (
    <div className="p-4 mx-auto max-w-xl bg-white">
        <h2 className="text-3xl text-slate-900 font-bold">Contact us</h2>
        <form className="mt-8 space-y-5" onSubmit={(e)=>submitForm(e)}>
          <div>
            <label className='text-sm text-slate-900 font-medium mb-2 block'>Name</label>
            <input type='text' placeholder='Enter Name'
              name='Name'
              onChange={(e)=>setValue(prev=>({...prev, name: e.target.value}))}
              value={value.name}
              className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all" />
              {
                error.name && 
                <div className='text-red-500'>Please Enter a Name</div>
              }
          </div>
          <div>
            <label className='text-sm text-slate-900 font-medium mb-2 block'>Email</label>
            <input type='email' placeholder='Enter Email'
              name='Email'
              onChange={(e)=>(
                setValue(prev=>({...prev, email: e.target.value}))
  )}
              value={value.email}
              className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all" />
               {
                error.email && 
              <div className='text-red-500'>Please Enter a Email</div>
               }
          </div>
          <div>
            <label className='text-sm text-slate-900 font-medium mb-2 block'>Message</label>
            <textarea placeholder='Enter Message' rows="6"
              name='Message'
                onChange={(e)=>setValue(prev=>({...prev, Message: e.target.value}))}
              value={value.Message}
              className="w-full px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm pt-3 outline-0 transition-all">
              </textarea>
               {
                error.Message && 
              <div className='text-red-500'>Please Enter a Message</div>
               }
          </div>
          <input type='submit'
            value='Send Message'
            className="text-white bg-slate-900 font-medium hover:bg-slate-800 tracking-wide text-sm px-4 py-2.5 w-full border-0 outline-0 cursor-pointer"/>
        </form>
      </div>
  )
}
