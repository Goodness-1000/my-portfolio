import React from 'react'
import Button from './components/Button'
import Works from './components/Works'

const App = () => {
  return (
    <div className='relative bg-[#222831] '> 
       <header className="flex justify-between h-[100px] items-center px-24 py-4">
        <h1 className='text-[#EEEEEE] font-bold'>GoodyWain-Design</h1>
        <div className="flex space-x-8">
          <h1 className='text-[#EEEEEE] text-sm font-normal'>Home</h1>
          <h1 className='text-[#EEEEEE] text-sm font-normal'>About me</h1>
          <h1 className='text-[#EEEEEE] text-sm font-normal'>Contact</h1>
        </div>
        </header>
        {/* HERO */}
        
        <div className=" flex gap-8 h-screen items-center justify-center px-24">
        <img
            src="/arrow1.svg"
            className="   object-cover absolute left-10 top-"
            alt="arrowimage"
          />
          <div className='w[60%] -mt-32 flex flex-col items-start justify-center space-y-4'>
            <h1 className='text-7xl  text-white font-bold'>Creative Frontend
               <span className='text-pink-400'>developer</span>
              </h1>
              <div className="space-x-4 flex items-center pt-24">
            <Button title="Hire me"  green/>
            <Button title="Download cv"/>
          </div>
         
          </div>
          <div className="w-[60%] flex items-center justify-center relative ">
          <img
            src="/bgimage1.svg"
            className="   object-cover absolute -right-2"
            alt="heroimage"
          />
          <img
            src="/image1bottom.svg"
            className="   object-cover absolute top-[280px] right-40"
            alt="heroimage"
          />
          <img
            src="/image1.svg"
            className="pt-80  object-cover absolute right-24"
            alt="heroimage"
          />
           
        </div>
        <div className='mt-[550px]'>
          <img
            src="/arrowdown.svg"
            className=" w-[5%]  object-cover absolute left-[450px]"
            alt="arrowdown"
          />
          </div>
        </div>
         {/*section2 About me*/} 
       <div className="flex h-screen items-center justify-center px-24 mt-32 mb-56 ">
        <div className="w-[50%]  flex flex-col items-start space-y-4 relative">
        <img
            src="/music2.svg"
            className="w-[7%]   object-cover absolute right-70 -top-10"
            alt="heroimage2"
          />
           <img
            src="/lightbulb.svg"
            className="w-[10%]   object-cover absolute right-48 top-0"
            alt="heroimage2"
          />
           <img
            src="/arrow2.svg"
            className="w-[20%]   object-cover absolute right-48 top-80"
            alt="heroimage2"
          />
        <h2 className='text-7xl  text-white font-bold'>About 
           <span className='text-pink-400'>me</span></h2>
        <p className='text-white text-md w-[75%]'>As a passionate and skilled software
           engineer, I specialize in developing efficient, scalable, and user-friendly
            applications. With expertise in front-end technologies like HTML, CSS, 
            JavaScript, and frameworks such as React.js, I create intuitive web 
            experiences that enhance usability and performance. My strong problem-solving
             abilities, commitment to clean code, and knowledge of best development 
             practices allow me to contribute effectively to any team. I am always eager
              to learn new technologies, optimize workflows, and collaborate with 
              cross-functional teams to build innovative software solutions that drive 
              success. 
          <b>Read more</b></p>
        </div>
        <div className="w-[50%] top-24 flex items-center justify-center relative">
        <img
            src="/bgimage2.svg"
            className="w-[100%]   object-cover absolute right-0"
            alt="heroimage2"
          />
          <img
            src="/image1bottom.svg"
            className="w-[60%]   object-cover absolute right-32 top-72"
            alt="heroimage"
          />
          <img
            src="/image2.svg"
            className="w-[60%]   object-cover absolute right-32 top-2"
            alt="heroimage"
          />
        </div>
        </div> 
        {/*section3*/} 
        <div className="flex h-screen items-center justify-center mb-24 px-24 ">
           <img
            src="/section3bg.svg"
            className="w-[100%] h-[100vh]   object-cover absolute  mt-[50px]"
            alt="heroimage"
            
          />
         <div className='absolute flex left-24 -mt-64'>
         <h2 className='text-7xl  text-white font-bold'>My Recent 
         <span className='text-pink-400'>Works</span></h2>
         <div className="space-x-4 flex pt-24 absolute">
            <Button title="All"  green/>
            <Button title="Front-end"/>
            <Button title="UI"/>
            <Button title="Web-design"/>
          </div>
          <div className='absolute flex top-48 space-x-8'>
            <Works img={"/course-3.svg"}/>
            <Works img={"/course-2.svg"}/>
            <Works img={"/course-1.svg"}/>
          </div>
         </div>
         </div> 
         {/*section4*/}
          <div className="flex pb-8 gap-8  h-screen items-center justify-center px-24">
          
          <div className='w[50%] items-start justify-center left-0'>
            <h1 className='text-7xl  text-white font-bold'>Got a project in<br/>
               <span className='text-pink-400'>mind?</span>
              </h1>
             <div className='flex'>
          <img
            src='/section4arrow.svg'
            className='-pl-8 pt-8'
            alt='arrowdown'
          />
           <img
            src="/climbing.svg"
            className="w-[28vw] pl-40 object-cover absolute"
            alt="climbing image"
            />
            <img
            src="/shadow4.svg"
            className="w-[22vw] pl-40 pt-[297px] object-cover absolute"
            alt="climbing image"
            />
            </div>
              </div>
           <div className='form'>
           <img
          src='/keyboard.svg'
          className='  pb-8 '
          />
           <div className='flex gap-4 pb-8'>
            <div>
            <h3 className='text-white text-2xl'>your name</h3>
            <input className='bg-[#393E4680] text-white rounded-md py-2 px-2' type='text' placeholder='Name'></input>
            </div>
           <div>
           <h3 className='text-white text-2xl'>your email</h3>
           <input className='bg-[#393E4680] text-white rounded-md py-2 px-2' type='text' placeholder='Name'></input>
           </div>
           
           </div>
           <h3 className='text-white text-2xl'>Your message</h3>
            <input className='bg-[#393E4680] text-white rounded-md h-[200px] w-[420px]' type='text' placeholder='message'></input>
           <div className='pt-8'>
           <Button title='Send messege' green/>
           </div>
           <div className='pl-96 '> 
            <img
              src='/mail4.svg'
              alt='mailimage'
            />
            </div>

            </div> 
            
          
              </div>
    <hr/>
    {/*footer*/}
    <div  className="flex-col gap-16 h-[50vh] items-center justify-center px-24">
         <div className='flex gap-16 justify-center pt-32'>
         <div className='text-white flex'>
          <img
            src='/home.svg'
            />Home
          
          </div>
          <div className='text-white flex'>
          <img
            src='/user.svg'
            />About me
          
          </div>

          <div className='text-white flex'>
          <img
            src='/call.svg'
            />Contact
          
          </div>
         </div>
          <div className='flex gap-8 justify-center pt-16'>
            <img
              src='/facebook.svg'
            />
            <img
              src='/instagram.svg'
            />
            <img
              src='/twitter.svg'
            />
            <img
              src='/youtube.svg'
            />
            
          </div>
          <div className='float-right pt-8'>
          <p className='text-sm text-white '>Terms of service-Privacy policy</p> 
          </div>
          
    </div>
         
    </div>
  )
}

export default App