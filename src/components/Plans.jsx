import React, { useState } from 'react'
import Sidebar from './Sidebar'
import GamesIcon from '@mui/icons-material/Games';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Link } from 'react-router-dom';
import Addons from './Addons';

function Plans() {

  const [plans, setPlans] = useState([
    { id: '1', name: 'Arcade', price: '$9/mo', image: <GamesIcon className='bg-orange-300 text-white rounded-full p-2' sx={{ fontSize: 50}}/>, prices: '$90/yr' },
    { id: '2', name: 'Advanced', price: '$12/mo', image: <VideogameAssetIcon className='bg-rose-400 text-white rounded-full p-2' sx={{ fontSize: 50}}/>, prices: '$120/yr' },
    { id: '3', name: 'Pro', price: '$15/mo', image: <SportsEsportsIcon className='bg-blue-800 text-white rounded-full p-2' sx={{ fontSize: 50}}/>, prices: '$150/yr' }
  ]);
  const [selectedId, setSelectedId] = useState('1');

  function handlePlanChange(id, e) {
    setPlans(plans.map(plan => {
      if (plan.id === id) {
        return {
          ...plan, name: e.target.value
          
        };
      } else {
        return plan;
      }
    }));
  }

  const useToggle = (initialState) => {
    const [toggleValue, setToggleValue] = useState(initialState);

    const toggler = () => { setToggleValue(!toggleValue) };
    return [toggleValue, toggler]
  };

  const [toggle, setToggle] = useToggle();

  return (
    <div className='lg:flex'>
      <div>
        <Sidebar />
      </div>
      <div className='lg:ml-36 lg:mt-12 mt-[-450px] p-4'>
        <p className='lg:text-4xl font-bold text-3xl '>Select your plan</p>
        <p className='mt-3 font-mono text-slate-500'>You have a option of monthly or yearly billing.</p>

        <div className='lg:flex lg:pt-12 pt-5'>
          {plans.map((plan) => (
            <div
            onChange={e => {handlePlanChange(plan.id, e)}}
            onClick={() => {setSelectedId(plan.id);}}
            key={plan.id}
            className={` cursor-fancy ${selectedId === plan.id ? ' border-blue-900 bg-zinc-200' : ''} 
            lg:grid lg:grid-cols-1 lg:gap-1 flex m-10 ml-0 lg:relative rounded-xl lg:p-24 p-3 mt-0 border-2 border-black`}
            >
              <div className='lg:absolute top-3 left-4'>
                {plan.image}
              </div>
              <div className='pl-2 lg:mt-0 mt-3 lg:pl-0 font-bold text-lg lg:absolute bottom-16 left-5'>
                {plan.name}
              </div>
              <div className='grid grid-col-1 lg:absolute bottom-4 left-5 text-gray-400'>
                <div className='lg:absolute bottom-5 lg:mt-0 mt-4 lg:ml-0 ml-4'>{toggle && (<p className=' text-blue-900 lg:ml-0 ml-[-35px]'>2 months free</p>) ? plan.prices : plan.price}</div>
                <div>{toggle && (<p className=' text-blue-900 lg:ml-0 ml-[-35px]'>2 months free</p>)}</div>
              </div>
            </div>
          ))}
        </div>
        <div className='w-full bg-gray-200 p-4 rounded-lg flex justify-center '>
          <p className='pr-5 font-bold'>Monthly</p>
          <div>
            <label className='relative inline-flex items-center cursor-pointer' type='checkbox' defaultChecked={true}>
                <input type="checkbox" value="check" class="sr-only peer" onClick={setToggle}/>
                <div class="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-900"></div>
            </label>
          </div>
          <p className='pl-5 font-bold'>Yearly</p>
        </div>
        <div className='grid grid-cols-2'>
          <div className='flex mt-32 cursor-fancy'>
            <Link to='/' className='font-bold text-gray-500'>
              Go Back
            </Link>
          </div>
          <div className='flex mt-28 cursor-pointer justify-end'>
            <Link to='/addons' className='rounded-md bg-blue-900 hover:bg-blue-700 text-white lg:p-4 p-2  font-bold'>
              Next Step
            </Link>
          </div>
        </div>
      </div>
      <div className='hidden'><Addons setToggle={setToggle} handlePlanChange={handlePlanChange}/></div>
    </div>
  )
}

export default Plans;