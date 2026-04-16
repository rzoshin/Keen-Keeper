import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";


const useChartData = () => {
  const { callRecords, textRecords, videoRecords } = useContext(AppContext);

  return [
    {
      name: "Text",
      value: textRecords.length,
      fill: "#7C3AED", // purple
    },
    {
      name: "Call",
      value: callRecords.length,
      fill: "#1F4D3B", // dark green
    },
    {
      name: "Video",
      value: videoRecords.length,
      fill: "#2F9E44", // green
    },
  ];
};

export default useChartData;