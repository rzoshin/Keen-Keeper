import React from "react";
import { useLoaderData, useParams } from "react-router";
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";
import "./FriendDetails.css";

const FriendDetails = () => {
  const allFriends = useLoaderData();

  const params = useParams();

  const details = allFriends.find((friend) => friend.id == params.id);
  const {
    id,
    picture,
    name,
    days_since_contact,
    tags,
    status,
    bio,
    next_due_date,
  } = details;

  return (
    <div className="bg-[#F8FAFC]">
      <div className="container mx-auto">
          <Sidebar />
          <Main />
      </div>
    </div>
  );
};

export default FriendDetails;
