import { ArrowLeft, Send } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router';

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
    if(!value.name){
        setError(prev=>({prev, name: 'Please Enter your name.'}))
        console.log('inside name error');
        return
      }
      if(!value.email){
        setError(prev=>({prev, email: 'Please Enter your Email.'}))
        console.log('inside email error.');
        return
      }
      if(!value.Message){
        setError(prev=>({prev, email: 'Please Enter your Message.'}))
        console.log('inside message error.');
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
    <div className="p-4 mx-auto max-w-xl bg-slate-900 my-2">
        <h2 className="text-3xl text-slate-900 font-bold">Contact us</h2>
        <form className="mt-8 space-y-5" action="https://formsubmit.co/gs8828256+portfolio@email.com" onSubmit={(e)=>submitForm(e)} method='POST'>
          <div>
            <label className='text-sm text-slate-900 font-medium mb-2 block'>Name</label>
            <input type='text' placeholder='Enter Name'
              name='Name'
              onChange={(e)=>(
                setValue(prev=>({...prev, name: e.target.value})),
                setError(prev=>({...prev, name: ''}))
              )}
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
                setValue(prev=>({...prev, email: e.target.value})),
                setError(prev=>({...prev, email: ''}))

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
                onChange={(e)=>(
                  setValue(prev=>({...prev, Message: e.target.value})),
                   setError(prev=>({...prev, Message: ''}))
              )}
              value={value.Message}
              className="w-full px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm pt-3 outline-0 transition-all">
              </textarea>
               {
                error.Message && 
              <div className='text-red-500'>Please Enter a Message</div>
               }
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to='./' className='bg-slate-700 p-2 rounded-lg hover:text-gray-700'><ArrowLeft/></Link>
          <div className='text-white bg-slate-900 flex font-medium hover:bg-slate-800 tracking-wide text-sm px-4 py-2.5 border-0 outline-0 cursor-pointer'>
          <input type='submit'
            value='Send Message'
            className="flex mx-4"/>
            <Send className='flex mx-2'/>
          </div>
            </div>
        </form>
      </div>
  )
}
