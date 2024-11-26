import React from 'react'


const SkillS = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center' data-aos='zoom-in-down'></div>
      <div>
        <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
        <p className='text-gray-500 pt-2'>
          I have a strong foundation in Web Development. I am proficient in creating custom websites tailored to unique client requirements. I am well-versed in multiple languages, such as HTML, CSS, Typescript & Jawascript, enabling me to code innovative features & customizations, making each project distinct.
        </p>
        <div>
        <div className='grid grid-cols-2 text-blue-600 text-3xl sm:text-4xl'>
          <div className='space-y-2'data-aos='zoom-in-down'>
             <h2>Typescript</h2>
             <h2>React.js</h2>
             <h2>Next.js</h2>
             </div>
             <div className='space-y-2' data-aos='zoom-in-down'>
             <h2>Tailwind</h2>
             <h2>CSS</h2>
             <h2>Node.js</h2>
             </div>
        </div>
      </div>
      
    </div>
      </div>

  )
}

export default SkillS
