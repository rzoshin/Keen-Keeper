import React from 'react';
import './FriendCard.css'
import { NavLink } from 'react-router';

const FriendCard = ({friend}) => {
    const {id, picture, name, days_since_contact, tags, status} = friend;
    return (
        <NavLink to={`/friendDetails/${id}`} className='card flex flex-col justify-center items-center bg-base-100 p-6'>
            <img src={picture} className='mb-3'></img>
            <h2 className='font-semibold text-xl mb-2'>{name}</h2>
            <p className='mb-2 text-[#64748B] text-xs'>{days_since_contact}d ago</p>
            <div className='flex gap-1 mb-2'> 
            {
                tags.map(tag => <div className='badge text-[#244D3F] bg-[#CBFADB] uppercase text-xs font-medium'>{tag}</div>)
            }
            </div>
            <div className={`badge text-xs font-medium capitalize text-white ${status == "overdue" ? "bg-red-400" : status == "almost due" ? "bg-orange-400" : "bg-green-400"}`}>
                {status}
            </div>
        </NavLink>
    );
};

export default FriendCard;