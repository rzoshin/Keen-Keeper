import React, { useContext } from 'react';
import { AppContext } from '../../context/AppProvider';
import TimelineCard from '../../ui/TimelineCard';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const TimelineInfo = () => {
    const interaction = useContext(AppContext);
    const {callRecords, textRecords, videoRecords, records} = interaction;
    console.log(records);
    return (
        <div className='bg-[#F8FAFC]'>
            <div className='max-w-[75%] mx-auto py-20'> 
                <h2 className='text-5xl font-bold mb-6'>Timeline</h2>
                <button className='text-[#64748B] text-lg w-[350px] flex justify-between p-4 border border-[#E9E9E9] rounded-lg mb-6'>Filter timeline <MdOutlineKeyboardArrowDown /></button>
                <div className='grid grid-cols-1 gap-6'> 
                {
                    records.map(record => <TimelineCard record={record}/>)
                }
                </div>
            </div>
        </div>
    );
};

export default TimelineInfo;