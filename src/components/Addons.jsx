// import React, { useState } from 'react'
// import Sidebar from './Sidebar'

// function Addons() {

//   // const [addons, setAddons] = useState([
//   //   {id: '1', name: 'Online service', description: 'Access to multiplayer games', price: '+$1/mo', prices: '+$10/yr', checked: true},
//   //   {id: '2', name: 'Larger storage', description: 'Extra 1TB of cloud storage', price: '+$2/mo', prices: '+$20/yr', checked: true},
//   //   {id: '3', name: 'Customizable profile', description: 'Custom theme on your profile', price: '+$2/mo', prices: '+$20/yr', checked: false}
//   // ])
//   const [selectedId, setSelectedId] = useState('1')

//   return (
//     <div className='flex'>
//       <div>
//         <Sidebar />
//       </div>
//       <div className='lg:ml-36 lg:mt-12 mt-[-450px] p-4'>
//         <p className='lg:text-4xl font-bold text-3xl '>Pick add-ons</p>
//         <p className='mt-3 font-mono text-slate-500'>Add-ons help enhance your gaming experience.</p>
//         <div className='pt-8'>
//           {addons.map((addon) => (
//             <div className='flex w-[600px] border-2 border-gray-300 p-6 rounded-xl mt-5'>
//               <div key={addon.id} className=' font-bold w-full text-slate-900'>
//                 <div className=''>
//                   <label className='flex'>
//                     <div className='mt-4'> 
//                       <input type="checkbox" className={`ml-4 w-5 h-5 ${selectedId === addon.id ? 'border-blue-900 bg-gray-500' :  ''}`}  checked={addon.checked} onChange={checkboxClick} onClick={() => setSelectedId(addon.id)}/>
//                     </div>
//                     <div className='pl-7'>
//                       <span className=''>
//                         {addon.name}
//                       </span>
//                       <p className='text-slate-500 font-mono font-normal'>
//                         {addon.description}
//                       </p>
//                     </div>
//                   </label>
//                 </div>
//               </div>
//               <div className='float-right'>
//                 {addon.price}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Addons