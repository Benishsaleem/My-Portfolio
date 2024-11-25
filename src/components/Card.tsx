import React from 'react'
import Image from 'next/image';
interface propsType{
  title: string;
  desc: string;
  img: string;
  tags: string[];

}

const Card: React.FC<propsType> = ({title, desc, img, tags}) => {
  return (
    <div className='border border-blue-600 w-[250px] sm:w-[250px]'  data-aos="zoom-in-down">
      
      <div>
        <Image className='w-[250px] sm:w-[250px] h-auto'
        src={img}
        width={350}
        height={350}
        alt={title}/>
      </div>
      <div className='p-4 space-y-4'>
          <div className='text-4xl font-bold bg-orange-700'>{title}</div>
          <div>{desc}</div>
      
    </div>
    <div>
        {tags.map((el)=> (
          <div className='tags' key={el}>{el}</div>
        ))}
      </div>
      
  </div>
  )
}

export default Card
