import React, { Suspense } from "react";
import Banner from "../../components/homepage/banner/Banner";
import AllFriends from "../../components/homepage/allFriends/AllFriends";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <Suspense
        fallback={
          <div className="flex justify-center py-20">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <AllFriends />
      </Suspense>
    </div>
  );
};

export default Homepage;
