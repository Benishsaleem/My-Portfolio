import React from 'react'
import { AiTwotoneMail } from "react-icons/ai";
import { BsTelephoneInbound } from "react-icons/bs";




const Contact = () => {
  return (
    <div id='contact' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-10'>
        
        <div className='space-y-8'>
            <h2 className='text-5xl'  data-aos="zoom-in-down">Get in touch</h2>
            <p className='text-gray-500 text-[18px] pt-2'  data-aos="zoom-in-down"> 
                Drop me a line, Give me a call or Send me a message by submitting the Form.
            </p>
            <div className='flex gap-3 items-center'  data-aos="zoom-in-down">
            <AiTwotoneMail  size={30} color='blue'/> bini.saleem27@gmail.com
            </div>
            <div className='flex gap-3 items-center'  data-aos="zoom-in-down">
            <BsTelephoneInbound size={30} color='blue'/> +92 3342094489
            </div>
        </div>
        <div className='space-y-8'>
          <div className='flex flex-col gap-1'  data-aos="zoom-in-down">
            <label htmlFor='name'>Name</label>
            <input type='text'
            className='h-[40px] bg-transparent border border-blue-600'  data-aos="zoom-in-down"
            id='name'/>
            </div>
            <div className='flex flex-col gap-1'  data-aos="zoom-in-down">
            <label htmlFor='email'>Email</label>
            <input type='text'
            className='h-[40px] bg-transparent border border-blue-600'  data-aos="zoom-in-down"
            id='email'/>
            </div>
            <div className='flex flex-col gap-1'  data-aos="zoom-in-down">
            <label htmlFor='msg'>Message</label>
            <textarea className=' bg-transparent border border-blue-600'  data-aos="zoom-in-down"
            id='msg' rows={8}></textarea>
        </div>
        <button className='bg-blue-600 pt-2 px-6 hover:text-red-600'  data-aos="zoom-in-down">Send</button>
      </div>
    </div>
    </div>
  )
}

export default Contact
