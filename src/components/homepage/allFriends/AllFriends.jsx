import { use } from 'react';
import FriendCard from '../../../ui/FriendCard';

const friendsPromise = fetch('/friendsData.json').then(res=> res.json());

const AllFriends = () => {
    const allFriends = use(friendsPromise);

    return (
        <div className='max-w-[75%] mx-auto'>
            <h3>Your Friends</h3>
            <div className='grid grid-cols-4'>
                {
                    allFriends.map(friend => <FriendCard friend={friend}/>)
                }

            </div>
        </div>
    );
};

export default AllFriends;