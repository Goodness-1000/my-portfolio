import React from 'react'

function Works ({ img })  {
  return (
    <div className='flex bg-[#393E4680] w-[350px] h-[250px]'>
      <div className="w-[90%] flex items-center justify-center">
        <img
          src={img}
          className="w-[100%] justify-center "
          alt="workimage"
        />
      </div>
    </div>
  )
}

export default Works