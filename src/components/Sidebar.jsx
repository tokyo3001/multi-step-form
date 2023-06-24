import React from 'react'

function Sidebar() {
  return (
    <div>  
      {/* design for desktop view */}
      <div className='flex'>
        <div className="lg:bg-sidebar-desktop bg-sidebar-mobile bg-no-repeat h-[650px] w-80 bg-contain ">
          <div className='grid grid-cols-1 gap-5 text-white pt-10 pl-10 justify-center items-center text-lg '>
            <div className='flex'>
              <div className='rounded-full bg-transparent border-2 border-white w-8 hover:bg-blue-100 hover:text-black 
              text-white self-center pl-2 h-8'>
                1
              </div>
              <div className=' pl-5 lg:visible md:invisible invisible'>
                <div className='font-thin'>STEP 1</div>
                <div className=' font-semibold'>YOUR INFO</div>
              </div>
            </div>
            <div className='flex pt-5'>
              <div className='rounded-full bg-transparent border-2 border-white w-8 hover:bg-blue-100 hover:text-black 
              text-white self-center pl-2 h-8 lg:ml-0 ml-16 lg:mt-0 -mt-48'>
                2
              </div>
              <div className='pl-5 lg:visible md:invisible invisible'>
                <div className='font-thin'>STEP 2</div>
                <div className=' font-semibold'>SELECT PLANS</div>
              </div>
            </div>
            <div className='flex pt-5'>
              <div className='rounded-full bg-transparent border-2 border-white w-8 hover:bg-blue-100 hover:text-black 
              text-white self-center pl-2 h-8 lg:ml-0 ml-32 lg:mt-0 -mt-96'>
                3
              </div>
              <div className='pl-5 lg:visible md:invisible invisible'>
                <div className='font-thin'>STEP 3</div>
                <div className=' font-semibold'>ADD-ONS</div>
              </div>
            </div>
            <div className='flex pt-5'>
              <div className='rounded-full bg-transparent border-2 border-white w-8 hover:bg-blue-100 hover:text-black 
              text-white self-center pl-2 h-8 lg:ml-0 ml-48 lg:mt-0 mt-[-575px] pr-2'>
                4
              </div>
              <div className='pl-5 lg:visible md:invisible invisible'>
                <div className='font-thin'>STEP 4</div>
                <div className=' font-semibold'>SUMMARY</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;