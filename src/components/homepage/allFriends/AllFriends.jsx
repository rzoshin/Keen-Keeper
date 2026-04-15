import { use } from 'react';
import FriendCard from '../../../ui/FriendCard';

const friendsPromise = fetch('/friendsData.json').then(res=> res.json());

const AllFriends = () => {
    const allFriends = use(friendsPromise);

    return (
        <div className='max-w-[75%] mx-auto pb-20 pt-10'>
            <h3 className='font-semibold text-2xl mb-4 text-[#1F2937]'>Your Friends</h3>
            <div className='grid grid-cols-4 gap-6'>
                {
                    allFriends.map(friend => <FriendCard id={friend.id} friend={friend}/>)
                }

            </div>
        </div>
    );
};

export default AllFriends;