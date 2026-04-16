import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppProvider';
import TimelineCard from '../../ui/TimelineCard';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const TimelineInfo = () => {
    const interaction = useContext(AppContext);
    const { records} = interaction;
    const callRecords = records.filter(record => record.interactionType === "Call");
    const textRecords = records.filter(record => record.interactionType === "Text");
    const videoRecords = records.filter(record => record.interactionType === "Video");

    const [callFilter, setCallFilter] = useState(false);
    const [textFilter, setTextFilter] = useState(false);
    const [videoFilter, setVideoFilter] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const showCallRecords = () => {
        setCallFilter(true);
        setTextFilter(false);
        setVideoFilter(false);
        setIsOpen(false);

        console.log("CALL RECORDS:", callRecords);
    }
    const showTextRecords = () => {
        setCallFilter(false);
        setTextFilter(true);
        setVideoFilter(false);
        setIsOpen(false);

        console.log("TEXT RECORDS:", textRecords);
    }
    const showVideoRecords = () => {
        setCallFilter(false);
        setTextFilter(false);
        setVideoFilter(true);
        setIsOpen(false);
        console.log("VIDEO RECORDS:", videoRecords);
    }
    console.log(records);
    return (
        <div>
            <div className='max-w-[75%] mx-auto py-20'> 
                <h2 className='text-5xl font-bold mb-6'>Timeline</h2>
                <div className='dropdown dropdown-bottom relative'>
                  <div
                    role="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className='btn text-[#64748B] text-lg w-[350px] flex justify-between p-4 border border-[#E9E9E9] rounded-lg'
                >
                Filter timeline
                <MdOutlineKeyboardArrowDown
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}/>
                </div>
                {isOpen && (
                <ul className="absolute mt-2 menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-md">
                    <li onClick={showCallRecords}><a>Call</a></li>
                    <li onClick={showTextRecords}><a>Text</a></li>
                    <li onClick={showVideoRecords}><a>Video</a></li>
                    <li onClick={() => {
                        setCallFilter(false);
                        setTextFilter(false);
                        setVideoFilter(false);
                    }}> <a>All</a></li>
                </ul>)}
                </div>
                <div className='mt-6'> 
                {
                    records.length === 0 && <div className='text-[#64748B]/50 text-xl flex items-center justify-center text-center py-10 font-semibold'>No interactions yet. <br />Start connecting with your friends to see them here!</div>
                }
                {
                    callFilter ? <div className='grid grid-cols-1 gap-6'>
                        {
                            callRecords.map(record => <TimelineCard record={record}/>)
                        }
                    </div> : textFilter ? <div className='grid grid-cols-1 gap-6'>
                        {
                            textRecords.map(record => <TimelineCard record={record}/>)
                        }
                    </div> : videoFilter ? <div className='grid grid-cols-1 gap-6'>
                        {
                            videoRecords.map(record => <TimelineCard record={record}/>)
                        }
                    </div> : <div className='grid grid-cols-1 gap-6'> 
                {
                    records.map(record => <TimelineCard record={record}/>)
                }
                </div>
                }
                </div>
                
            </div>
        </div>
    );
};

export default TimelineInfo;

{/* <div className="dropdown dropdown-bottom">
  <div tabIndex={0} role="button" className="btn m-1">Click ⬇️</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div> */}