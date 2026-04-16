import React from "react";
import { AppContext } from "../context/AppProvider";
import call from "../assets/call.jpg";
import text from "../assets/text.png";
import video from "../assets/video.png";
import './TimelineCard.css';

const TimelineCard = ({ record }) => {
  console.log(record);
  const { interactionType, name, today } = record;
  console.log(typeof today);

  const dateString = today.toString();

  const formatted = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(dateString));

  console.log(formatted);

  return (
    <div className="flex cardui items-center gap-4 p-4">
      <div>
        <img
          src={
            interactionType === "Call"
              ? call
              : interactionType === "Text"
                ? text
                : video
          }
          alt=""
          width="80px"
          height="80px"
        />
      </div>
      <div>
        <p className="text-[#244D3F] text-xl font-medium">
          {interactionType === "Call"
            ? "Call"
            : interactionType === "Text"
              ? "Text"
              : "Video"}{" "}
          <span className="text-[#64748B] text-lg font-normal">with {name}</span>
        </p>
        <span className="text-[#64748B] font-medium">{formatted}</span>
        {/* <p>{today}</p> */}
      </div>
    </div>
  );
};

export default TimelineCard;
