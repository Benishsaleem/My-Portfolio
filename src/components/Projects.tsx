import React from 'react';
import Heading from './Heading';
import Card from './Card';


const data = [
  {
    id:0 ,
    title: "Static Interactive Resume",
    desc: "HTML , CSS , Typescript based Website for Resume Display",
    img: "/static-interactive-resume.jpeg",
    tags: ["HTML" , "CSS" , "Typescript" , "Node"]

  },
  {
    id: 1,
    title:"Editable Resume Builder",
    desc:"HTML, CSS, Typescript based Website to build Resume display on Website",
    img:"/editable-resume.jpeg",
    tags:["HTML" , "CSS" , "Typescript" , "Node"]

  },
  {
    id:2 ,
    title:"Editable and Shareable Resume Builder",
    desc:"HTML, CSS, Typescript based Website to build Resume display on Website & has functionality to download & print",
    img:"/editable-shareable-resume.jpeg",
    tags:["HTML" , "CSS" , "Typescript" , "Node"]

  },
  {
    id:3 ,
    title:"Number Guessing Game",
    desc:"A CLI based number guessing game using Typscript & Published as an executable npm Package",
    img:"/number-guessing-game.png",
    tags:["Node" , "Typescript" , "Jawascript" , "npm"]

  },
  {
    id:4 ,
    title:"To-Do-List",
    desc:"A simple CLI based app to Create & Manage Personal List",
    img:"/to-do-list.png",
    tags:["Node" , "Typescript" , "Jawascript" , "npm"]

  },
  {
    id:5 ,
    title:"Word Counter",
    desc:"A CLI based tool for Counting Words in a given Text or File",
    img:"/word-counter.png",
    tags:["Node" , "Typescript" , "Jawascript" , "npm"]

  },
  {
    id:6 ,
    title:"ATM",
    desc:"A CLI based ATM (Machine) to check balance & withdrawal of Cash Transaction by entering Pin",
    img:"/ATM.png",
    tags:["Node" , "Typescript" , "Jawascript" , "npm"]

  },
  {
    id:7 ,
    title:"Currency Converter",
    desc:"A CLI based tool which help to convert Currency Value in a quick & easy way",
    img:"/currency-converter.png",
    tags:["Node" , "Typescript" , "Jawascript" , "npm"]

  },
  {
    id:8 ,
    title:"Simple Calculator",
    desc:"A CLI basedd simple calculator to perform basic operations",
    img:"/simple-calculator.png",
    tags:["Node" , "Typescript" , "Jawascript" , "npm"]
  }
  ];
  const Projects = () => {
    return (
      <div id='projects' className='container grid'>
        <Heading title='My Projects'/>
        <div className='grid xl-gap-0 xl-gap-y-10 md:grid-cols-3 grid-rows-3 gap-4 justify-items-center'>
          {data.map((el) => (<Card
          key={el.id}
          title={el.title}
          desc={el.desc}
          img={el.img}
          tags={el.tags}
          
          />))}
        </div>
        

        </div>
        
    )
  }
  
  export default Projects