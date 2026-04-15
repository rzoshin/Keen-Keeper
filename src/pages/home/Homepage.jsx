import React from 'react';
import Banner from '../../components/homepage/banner/Banner';
import AllFriends from '../../components/homepage/allFriends/AllFriends';


const Homepage = () => {
    return (
        <div className='bg-[#F8FAFC]'>
            <Banner />
            <AllFriends />
        </div>
    );
};

export default Homepage;