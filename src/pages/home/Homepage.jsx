import React, { Suspense } from 'react';
import Banner from '../../components/homepage/banner/Banner';
import AllFriends from '../../components/homepage/allFriends/AllFriends';


const Homepage = () => {
    return (
        <div>
            <Banner />
            <Suspense fallback= {<span className="loading loading-spinner text-success loading-xl"></span>}>
                <AllFriends />
            </Suspense>

        </div>
    );
};

export default Homepage;