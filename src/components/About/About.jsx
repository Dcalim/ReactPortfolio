import React from 'react'
import photo1 from "/src/assets/Photos/4D68B9B3-F3F2-42B3-AFC5-FE206D830DDF.PNG"
import photo2 from "/src/assets/Photos/6FF49DC7-3D52-41AD-A22C-3FB7E2D91A4B.PNG"

const About = () => {
  return (
    <div className='flex px-16 place-items-start'>
        <div className=''>
            <div>
                <h2 className='text-[#F5F5F5] font-bold text-4xl'>About Me</h2>
                <hr className="my-2 border-t border-[#F5F5F5] w-[40%]" /> 
            </div>
            <div>
                <img src={photo1} className='mx-2 py-0 w-[50%]'></img>
            </div>
            <div>
                <img src={photo2} className='mx-40 w-[40%] -mt-25'></img>
            </div>
        </div>
        <div className='text-white justify-start max-w-[50%] mt-25 pr-6 text-lg'>
            <h2 className='py-2'>I'm a third year Software Engineering student at the University of Guelph with a strong foundation in full-stack development, specializing in React and Java.</h2>
            <h2 className='py-2'>My experience spans building responsive web apps, designing intuitive user interfaces, and collaborating on team-based software projects.</h2>
            <h2 className='py-2'>I’ve led lab sessions, contributed to data analysis tools, and developed applications that combine clean design with functional code. Passionate about continuous learning, I also enjoy solving problems through creative coding and exploring new technologies that improve user experience.</h2>
        </div>
    </div>
  )
}

export default About
