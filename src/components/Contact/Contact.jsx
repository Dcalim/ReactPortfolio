import React, { useState } from 'react'
import { Alert } from "@material-tailwind/react";

const Contact = () => {
    const [success, setSuccess] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "03b8f304-f6a8-45c9-991b-f89196c7c42c");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            setShowAlert(true);
            setSuccess(true);
            event.target.reset();
          
            setTimeout(() => {
              setShowAlert(false); // Start fade out
              setTimeout(() => setSuccess(false), 500); // Remove from DOM after fade
            }, 3000);
          }
      };
    
  return (
    <div className='flex justify-center align items-center min-h-[80vh] w-[100%] max-w-4xl bg-neutral-90'>
      <form onSubmit={onSubmit} className='max-w-[600px] w-[100%] bg-neutral-900 px-[25px] py-[20px] rounded-lg shadow-md border-amber-800 m-[10px]'>
        <h2 className='font-medium text-center text-[#F5F5F5]'>Contact Form</h2>
        <div className='mt-[20px]'>
            <label className='text-[#F5F5F5] text-sm'>Full Name</label>
            <input className='w-[100%] h-[40px] bg-transparent border-2 border-solid p-2 placeholder:text-[#F5F5F5] text-[#E6E1D3] text-xs' type="text"  name='name' placeholder='Enter your name' required/>
        </div>
        <div className='mt-[20px]'>
            <label className='text-[#F5F5F5] text-sm'>Email Address</label>
            <input className='w-[100%] h-[40px] bg-transparent border-2 border-solid p-2 placeholder:text-[#F5F5F5] text-[#E6E1D3] text-xs' type="text" name='email' placeholder='Enter your email address' required/>
        </div>
        <div className='mt-[20px]'>
            <label className='text-[#F5F5F5] text-sm'>Your Message</label>
            <textarea className='p-2 w-[100%] h-[200px] bg-transparent border-2 border-solid border[#ddd] resize-none placeholder:text-[#F5F5F5] text-[#E6E1D3] text-xs' type="text" name='message' placeholder='Enter your message' required/>
        </div>
        <button className='my-2 w-[100%] h-[55px] bg-neutral-800 border-none rounded-md shadow-md text-[#F5F5F5] hover:bg-[#222222] duration-200 ease-in-out' type="submit">Send Message</button>
        {success && (
            <div className={`px-4 transition-opacity duration-500 ${showAlert ? 'opacity-100' : 'opacity-0'}`}>
            <Alert className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946] w-[100%]">
              Message sent successfully
            </Alert>
            </div>
        )}
      </form>
    </div>
  )
}

export default Contact
