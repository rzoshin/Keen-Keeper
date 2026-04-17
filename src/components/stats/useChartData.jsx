import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";

const useChartData = () => {
  const { records } = useContext(AppContext);

  const callRecords = records.filter(r => r.interactionType === "Call");
  const textRecords = records.filter(r => r.interactionType === "Text");
  const videoRecords = records.filter(r => r.interactionType === "Video");

  return [
    { name: "Text",  value: textRecords.length,  fill: "#7C3AED" },
    { name: "Call",  value: callRecords.length,   fill: "#1F4D3B" },
    { name: "Video", value: videoRecords.length,  fill: "#2F9E44" },
  ];
};

export default useChartData;