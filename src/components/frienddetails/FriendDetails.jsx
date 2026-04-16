import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import "./FriendDetails.css";
import { RiArchiveLine, RiDeleteBinLine, RiNotificationSnoozeLine } from "react-icons/ri";
import { TbPhoneCall } from "react-icons/tb";
import { LuMessageSquareMore } from "react-icons/lu";
import { PiVideoCamera } from "react-icons/pi";
import { FiVideo } from "react-icons/fi";
import { AppContext } from "../../context/AppProvider";

const formatDate = (dateString) => {
  const date = new Date(dateString);

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

const FriendDetails = () => {
  const allFriends = useLoaderData();

  const params = useParams();

  const details = allFriends.find((friend) => friend.id == params.id);
  const {
    id,
    picture,
    name,
    days_since_contact,
    goal,
    tags,
    status,
    bio,
    next_due_date,
    preferred_contact_method,
  } = details;

  const interaction = useContext(AppContext);
  const {handleCallRecords, handleTextRecords, handleVideoRecords} = interaction;

  return (
    <div className="bg-[#F8FAFC]">
      <div className="gridContainer mx-auto py-20">
        <div className="sidebar">
          <div className="profile cardui p-6">
            <img src={picture} alt="" />
            <h2 className="mb-2 font-semibold text-xl text-[#1F2937]">{name}</h2>
            <div className={`badge text-xs font-medium capitalize text-white mb-2 ${status == "overdue" ? "bg-red-400" : status == "almost due" ? "bg-orange-400" : "bg-green-400"}`}>
                {status}
            </div>
            <div className="mb-3 flex gap-2">
            {
                tags.map(tag => <div className='badge text-[#244D3F] bg-[#CBFADB] uppercase text-xs font-medium'>{tag}</div>)
            }
            </div>
            <p className="text-center italic text-[#64748B] font-medium">"{bio}"</p>
            <p className="text-sm text-[#64748B]">Preferred: {preferred_contact_method}</p>
          </div> 
          <div className="actions">
            <button className="btn bg-base-100"> <RiNotificationSnoozeLine />Snooze 2 Weeks</button>
            <button className="btn bg-base-100"> <RiArchiveLine />Archive</button>
            <button className="btn bg-base-100 text-red-500 "> <RiDeleteBinLine />Delete</button>
          </div>
        </div>
        <div className="main">
            <div className="stats text-center">
              <div className="cardui p-8">
                <h3 className="text-[#244D3F] font-semibold text-[30px]">{days_since_contact}</h3>
                <p className="text-[#64748B]">Days Since Contact</p>
              </div>
              <div className="cardui p-8">
                <h3 className="text-[#244D3F] font-semibold text-[30px]">{goal}</h3>
                <p className="text-[#64748B]">Goal (Days)</p>
              </div>
              <div className="cardui p-8 ">
                <h3 className="text-[#244D3F] font-semibold text-[30px]">{formatDate(next_due_date)}</h3>
                <p className="text-[#64748B]">Next Due</p>
              </div>
            </div>
            <div className="flex justify-between cardui p-6">
              <div>
                <h4 className="font-medium text-xl text-[#244D3F] mb-4">Relationship Goal</h4>
                <p className="text-lg"><span className="text-[#64748B]">Connect every </span><span className="font-bold">{goal} days</span></p>
              </div>
              <button className="btn text-[#1F2937] font-medium">Edit</button>
            </div>
            <div className="cardui p-6">
              <h4 className="text-[#244D3F] text-xl font-medium mb-4">Quick Check-In</h4>
              <div className="check-in">
                <button onClick={() => handleCallRecords(details)} className="cursor-pointer hover:bg-[#e2e3e5] flex flex-col items-center justify-center bg-[#F8FAFC] p-4 text-[#1F2937] font-normal"><TbPhoneCall className="text-3xl"/>Call</button>
                <button onClick={() => handleTextRecords(details)} className="cursor-pointer hover:bg-[#e2e3e5] flex flex-col items-center justify-center bg-[#F8FAFC] p-4 text-[#1F2937] font-normal"><LuMessageSquareMore className="text-3xl"/>Text</button>
                <button onClick={() => handleVideoRecords(details)} className="cursor-pointer hover:bg-[#e2e3e5] flex flex-col items-center justify-center bg-[#F8FAFC] p-4 text-[#1F2937] font-normal"><FiVideo className="text-3xl"/>Video</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
