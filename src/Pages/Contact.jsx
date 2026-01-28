import { ArrowLeft, Send } from 'lucide-react';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router';
import ShowMessage from '../Components/Reacttoast';

export default function Contact() {
  const [value, setValue]=useState({
    Name: '',
    Email: '',
    Message: ''
  })

  const [error, setError]=useState({
    Name: '',
    Email: '',
    Message: ''
  })
  const navigate=useNavigate();

  const submitForm=(e)=>{
    e.preventDefault();
    console.log('input value is', value);
    if(!value.Name){
        setError(prev=>({prev, Name: 'Please Enter yourNname.'}))
        console.log('insideNname error');
        return
      }
      if(!value.Email){
        setError(prev=>({prev, Email: 'Please Enter your Email.'}))
        console.log('inside email error.');
        return
      }
      if(!value.Message){
        setError(prev=>({prev, Message: 'Please Enter your Message.'}))
        console.log('inside message error.');
        return
    }
    console.log('form submitetd succesffuly');
    ShowMessage()
    setTimeout(() => {
        e.target.submit()
    }, 2000);
   
  }

  const inputStyle="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-slate-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all  dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400"
  const labelStyle="text-slate-900 dark:text-slate-400 text-sm text-slate-900 font-medium mb-2 block text-sm text-slate-900 font-medium mb-2 block text-sm text-slate-900 font-medium mb-2 block"
  

  return (
    <div className='container mx-auto px-6 lg:px-24 py-16  bg-zinc-50 dark:bg-slate-950 gap-4'>
      <h2 className="text-center text-3xl font-bold text-slate-900 tracking-widest mb-12">GET IN TOUCH</h2>
      <div className='flex flex-col lg:flex-row gap-12'>
      <div className='lg:w-1/2 flex flex-col justify-start  space-y-6'>
        <h3>I'm avaible for intern roles & freelance projects.</h3>
        <h3>You can send me the message if you've any doubt.</h3>
        <p>I'll try to reponse your message.</p>
        <Link to='https://mail.google.com/mail/?view=cm&to=dipsharmadev@example.com&su=Portfolio%20Message' className='bg-zinc-900 p-4 rounded-xl flex items-center gap-2 w-fit'>dipsharmadev@gmail.com <Send/></Link>
      </div>
    <div className="p-8 lg:w-1/2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 my-2 rounded-xl">
        <h2 className="text-3xl text-slate-900 dark:text-white font-bold">Contact us</h2>
        <form className="mt-8 space-y-5" action="https://formsubmit.co/dipeshgautambusiness+portfolio@gmail.com" 
        onSubmit={(e)=>submitForm(e)} 
        method='POST'>
            <input type="hidden" name="_next" value={window.location.origin} />
            <input type="hidden" name="_captcha" value="false" />
          <div>
            <label className={labelStyle}>Name</label>
            <input type='text' placeholder='Enter Name'
              name='Name'
              required
              onChange={(e)=>(
                setValue(prev=>({...prev, Name: e.target.value})),
                setError(prev=>({...prev, Name: ''}))
              )}
              value={value.Name}
              className={inputStyle} />
              {
                error.Name && 
                <div className='text-red-500'>Please Enter a Name</div>
              }
          </div>
          <div>
            <label className={labelStyle}>Email</label>
            <input type='email' placeholder='Enter Email'
              name='Email'
              required
              onChange={(e)=>(
                setValue(prev=>({...prev, Email: e.target.value})),
                setError(prev=>({...prev, Email: ''}))
                
              )}
              value={value.email}
              className={inputStyle} />
               {
                 error.email && 
                 <div className='text-red-500'>Please Enter a Email</div>
                }
          </div>
          <div>
            <label className={labelStyle}>Message</label>
            <textarea placeholder='Enter Message' rows="6"
              name='Message'
              onChange={(e)=>(
                setValue(prev=>({...prev, Message: e.target.value})),
                setError(prev=>({...prev, Message: ''}))
              )}
              value={value.Message}
              className={inputStyle}>
              </textarea>
               {
                 error.Message && 
                 <div className='text-red-500'>Please Enter a Message</div>
                }
          </div>
          <div className="flex sm:flex-col md:flex-row items-center justify-between lg:gap-4">
          <Link to='./' className='bg-slate-700 p-2 rounded-lg hover:text-gray-700'><ArrowLeft/></Link>
          <div className='text-white bg-slate-900 flex font-medium hover:bg-slate-800 tracking-wide text-sm px-4 py-2.5 border-0 outline-0 cursor-pointer'>
          <input type='submit'
            value='Send Message'
            className="flex mx-4 cursor-pointer"/>
            <Send className='flex mx-2'/>
          </div>
        </div>
        </form>
    </div>
      </div>
    </div>
  )
}
