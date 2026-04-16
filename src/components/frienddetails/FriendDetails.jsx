import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import {
  RiArchiveLine,
  RiDeleteBinLine,
  RiNotificationSnoozeLine,
} from "react-icons/ri";
import { TbPhoneCall } from "react-icons/tb";
import { LuMessageSquareMore } from "react-icons/lu";
import { FiVideo } from "react-icons/fi";
import { AppContext } from "../../context/AppProvider";
import './FriendDetails.css';

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

  const { handleCallRecords, handleTextRecords, handleVideoRecords } =
    useContext(AppContext);

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <div
        className="
        max-w-7xl mx-auto px-4 py-10
        grid gap-6
        grid-cols-1
        md:grid-cols-[280px_1fr]
        lg:grid-cols-[300px_1fr]
      "
      >
        {/* ================= SIDEBAR ================= */}
        <div className="grid gap-4">
          {/* Profile */}
          <div className="cardui p-6 flex flex-col items-center text-center">
            <img
              className="w-20! h-20! rounded-full! object-cover mb-3"
              src={picture}
            />

            <h2 className="mb-2 font-semibold text-xl text-[#1F2937]">
              {name}
            </h2>

            <div
              className={`badge text-xs font-medium capitalize text-white mb-2 ${
                status == "overdue"
                  ? "bg-red-400"
                  : status == "almost due"
                  ? "bg-orange-400"
                  : "bg-green-400"
              }`}
            >
              {status}
            </div>

            <div className="mb-3 flex flex-wrap justify-center gap-2">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="badge text-[#244D3F] bg-[#CBFADB] uppercase text-xs font-medium"
                >
                  {tag}
                </div>
              ))}
            </div>

            <p className="text-center italic text-[#64748B] font-medium">
              "{bio}"
            </p>

            <p className="text-sm text-[#64748B] mt-1">
              Preferred: {preferred_contact_method}
            </p>
          </div>

          {/* Actions */}
          <div className="grid gap-3">
            <button className="btn w-full justify-center bg-base-100">
              <RiNotificationSnoozeLine /> Snooze 2 Weeks
            </button>

            <button className="btn w-full justify-center bg-base-100">
              <RiArchiveLine /> Archive
            </button>

            <button className="btn w-full justify-center bg-base-100 text-red-500">
              <RiDeleteBinLine /> Delete
            </button>
          </div>
        </div>

        {/* ================= MAIN ================= */}
        <div className="grid gap-6">
          {/* Stats */}
          <div
            className="
            grid gap-4 text-center
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
          "
          >
            <div className="cardui p-8">
              <h3 className="text-[#244D3F] font-semibold text-3xl">
                {days_since_contact}
              </h3>
              <p className="text-[#64748B]">Days Since Contact</p>
            </div>

            <div className="cardui p-8">
              <h3 className="text-[#244D3F] font-semibold text-3xl">
                {goal}
              </h3>
              <p className="text-[#64748B]">Goal (Days)</p>
            </div>

            <div className="cardui p-8">
              <h3 className="text-[#244D3F] font-semibold text-3xl">
                {formatDate(next_due_date)}
              </h3>
              <p className="text-[#64748B]">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal */}
          <div
            className="
            cardui p-6
            flex flex-col gap-4
            sm:flex-row sm:items-center sm:justify-between
          "
          >
            <div>
              <h4 className="font-medium text-xl text-[#244D3F] mb-2">
                Relationship Goal
              </h4>
              <p className="text-lg">
                <span className="text-[#64748B]">Connect every </span>
                <span className="font-bold">{goal} days</span>
              </p>
            </div>

            <button className="btn text-[#1F2937] font-medium w-full sm:w-auto">
              Edit
            </button>
          </div>

          {/* Check-In */}
          <div className="cardui p-6">
            <h4 className="text-[#244D3F] text-xl font-medium mb-4">
              Quick Check-In
            </h4>

            <div
              className="
              grid gap-4
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
            "
            >
              <button
                onClick={() => handleCallRecords(details)}
                className="
                  flex flex-col items-center justify-center
                  p-5 rounded-lg
                  bg-[#F8FAFC]
                  hover:bg-[#e2e3e5]
                  transition
                "
              >
                <TbPhoneCall className="text-3xl mb-1" />
                Call
              </button>

              <button
                onClick={() => handleTextRecords(details)}
                className="
                  flex flex-col items-center justify-center
                  p-5 rounded-lg
                  bg-[#F8FAFC]
                  hover:bg-[#e2e3e5]
                  transition
                "
              >
                <LuMessageSquareMore className="text-3xl mb-1" />
                Text
              </button>

              <button
                onClick={() => handleVideoRecords(details)}
                className="
                  flex flex-col items-center justify-center
                  p-5 rounded-lg
                  bg-[#F8FAFC]
                  hover:bg-[#e2e3e5]
                  transition
                "
              >
                <FiVideo className="text-3xl mb-1" />
                Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;