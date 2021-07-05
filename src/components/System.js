import { observer } from "mobx-react-lite"

const System = observer(({tab}) => {

    const systems = [6,7,8,9].map(system => <button 
        key={system} 
        className={`${tab.system === system ? 'bg-yellow-600' : 'bg-gray-600'} text-white w-16 h-16 text-center first:rounded-l-lg last:rounded-r-lg`}
        onClick={() => tab.setSystem(system)}>
            {system}
        </button>);

    return (
        <div className='flex justify-start items-center mt-40'>
            <span className='text-sm mr-8'>SYSTEM</span>
            <div className='flex space-x-0.5'>
                {systems}
            </div>
        </div>
    )
});

export default System;