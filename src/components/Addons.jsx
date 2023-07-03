import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

function Addons() {

  // const [addons, setAddons] = useState([
  //   {id: '1', name: 'Online service', description: 'Access to multiplayer games', price: '+$1/mo', prices: '+$10/yr'},
  //   {id: '2', name: 'Larger storage', description: 'Extra 1TB of cloud storage', price: '+$2/mo', prices: '+$20/yr'},
  //   {id: '3', name: 'Customizable profile', description: 'Custom theme on your profile', price: '+$2/mo', prices: '+$20/yr'}
  // ])

  return (
    <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className='lg:ml-36 lg:mt-12 mt-[-450px] p-4 lg:grow'>
        <p className='lg:text-4xl font-bold text-3xl '>Pick add-ons</p>
        <p className='mt-3 font-mono text-slate-500'>Add-ons help enhance your gaming experience.</p>
        
        <ul class="grid w-full gap-6 md:grid-row-3 mt-5">
          <li>
              <input type="checkbox" defaultChecked id="react-option" value="" class="hidden peer" required=""/>
              <label for="react-option" class="inline-flex items-center justify-between w-full px-5 py-3 text-gray-500 bg-white border-2 border-black rounded-lg cursor-pointer  peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-black peer-checked:bg-zinc-200 hover:bg-gray-50">                           
                  <div class="block">                  
                    
                      <div class="w-full text-lg font-semibold">Online service</div>
                      <div class="w-full text-sm">Access to multiplayer games.</div>
                    
                    <div className='text-gray-400 pt-1'>+$1/mo</div>
                  </div>
              </label>
          </li>
          <li>
              <input type="checkbox" defaultChecked id="flowbite-option" value="" class="hidden peer"/>
              <label for="flowbite-option" class="inline-flex items-center justify-between w-full px-5 py-3 text-gray-500 bg-white border-2 border-black rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-black peer-checked:bg-zinc-200 hover:bg-gray-50">
                  <div class="block">
                    <div class="w-full text-lg font-semibold">Larger storage</div>
                    <div class="w-full text-sm">Extra 1TB of cloud storage.</div>
                    <div className='text-gray-400 pt-1'>+$2/mo</div>
                  </div>
              </label>
          </li>
          <li>
              <input type="checkbox" id="angular-option" value="" class="hidden peer"/>
              <label for="angular-option" class="inline-flex items-center justify-between w-full px-5 py-3 text-gray-500 bg-white border-2 border-black rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-black peer-checked:bg-zinc-200 hover:bg-gray-50">
                  <div class="block">
                    <div class="w-full text-lg font-semibold">Customizable profile</div>
                    <div class="w-full text-sm">Custom theme on your profile.</div>
                    <div className='text-gray-400 pt-1'>+$3/mo</div>
                  </div>
              </label>
          </li>
        </ul>
        <div className='grid grid-cols-2'>
          <div className='flex mt-20 cursor-fancy'>
            <Link to='/plans' className='font-bold text-gray-500'>
              Go Back
            </Link>
          </div>
          <div className='flex mt-14 cursor-pointer justify-end'>
            <Link to='/summary' className='rounded-md bg-blue-900 hover:bg-blue-700 text-white lg:p-4 p-2  font-bold'>
              Next Step
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addons