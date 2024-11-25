import React from 'react'


const SkillS = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'></div>
      <div>
        <h2 className='text-4xl md:text-5xl'  data-aos="zoom-in-down">Technologies I work with</h2>
        <p className='text-gray-500 pt-2'  data-aos="zoom-in-down">
          I have a strong foundation in Web Development. I am proficient in creating custom websites tailored to unique client requirements. I'm well-versed in multiple languages, such as HTML, CSS, Typescript & Jawascript, enabling me to code innovative features & customizations, making each project distinct.
        </p>
        <div>
        <div className='grid grid-cols-2 text-blue-600 text-3xl sm:text-4xl'>
          <div className='space-y-2'>
             <h2  data-aos="zoom-in-down">Typescript</h2>
             <h2  data-aos="zoom-in-down">React.js</h2>
             <h2  data-aos="zoom-in-down">Next.js</h2>
             </div>
             <div className='space-y-2'>
             <h2  data-aos="zoom-in-down">Tailwind</h2>
             <h2  data-aos="zoom-in-down">CSS</h2>
             <h2  data-aos="zoom-in-down">Node.js</h2>
             </div>
        </div>
      </div>
      
    </div>
      </div>

  )
}

export default SkillS
