import React, { useState } from 'react'
import Sidebar from './Sidebar'

function Addons() {

  const [addons, setAddons] = useState([
    {id: '1', name: 'Online service', description: 'Access to multiplayer games', price: '+$1/mo', prices: '+$10/yr'},
    {id: '2', name: 'Larger storage', description: 'Extra 1TB of cloud storage', price: '+$2/mo', prices: '+$20/yr'},
    {id: '3', name: 'Customizable profile', description: 'Custom theme on your profile', price: '+$2/mo', prices: '+$20/yr'}
  ])

  return (
    <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className='lg:ml-36 lg:mt-12 mt-[-450px] p-4 lg:grow'>
        <p className='lg:text-4xl font-bold text-3xl '>Pick add-ons</p>
        <p className='mt-3 font-mono text-slate-500'>Add-ons help enhance your gaming experience.</p>
        <div className='pt-8'>
          {addons.map((addon) => (
            <div className=''>

<ul class="flex w-full">
    <li>
        <input type="checkbox" id="react-option" value="" class="hidden peer" required="" />
        <label for="react-option" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
            <div class="block w-[32vw]">
                <div class="w-full text-lg font-semibold">{addon.name}</div>
                <div class="w-full text-sm">{addon.description}</div>
            </div>
        </label>
    </li>
</ul>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Addons