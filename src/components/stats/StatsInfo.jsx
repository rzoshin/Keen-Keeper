import React, { useContext } from 'react';
import InteractionPieChart from './InteractionPieChart';
import { AppContext } from '../../context/AppProvider';

const StatsInfo = () => {
    const interaction = useContext(AppContext);
    const {records} = interaction;
    return (
        <div>
            <div className='max-w-[75%] mx-auto py-20'> 
            <h2 className='text-5xl font-bold mb-6'>Friendship Analytics</h2>
            {
                records.length === 0 ? <div className='text-[#64748B]/50 text-xl flex items-center justify-center text-center py-40 font-semibold'>No interactions yet. <br />Start connecting with your friends to see them here!</div> : <InteractionPieChart/>
            }
            </div>
        </div>
    );
};

export default StatsInfo;