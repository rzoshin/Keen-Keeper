import { createContext, use, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppProvider = ({children}) => {
    const [records, setRecords] = useState([]);
    const [callRecords, setCallRecords] = useState([]);
    const [textRecords, setTextRecords] = useState([]);
    const [videoRecords, setVideoRecords] = useState([]);

    const handleCallRecords = (currentFriend) => {
        const isExist = callRecords.find(friend => friend.id === currentFriend.id);
        if(isExist) {
            return;
        }
        const newRecord = {...currentFriend, interactionType: "Call", today: new Date()};
        console.log("ADDING:", newRecord, typeof newRecord.today);
        
        setCallRecords(prev => [...prev, currentFriend]);
        setRecords(prev => [...prev, newRecord]);
        toast.success(`You are calling ${currentFriend.name}`);
    }
    const handleTextRecords = (currentFriend) => {
        const isExist = textRecords.find(friend => friend.id === currentFriend.id);
        if(isExist) {
            return;
        }
        const newRecord = {...currentFriend, interactionType: "Text", today: new Date()};

        setTextRecords(prev => [...prev, currentFriend]);
        setRecords(prev => [...prev, newRecord]);
        toast.success(`You are texting ${currentFriend.name}`);
    }
    const handleVideoRecords = (currentFriend) => {
        const isExist = videoRecords.find(friend => friend.id === currentFriend.id);
        if(isExist) {
            return;
        }
        const newRecord = {...currentFriend, interactionType: "Video", today: new Date()};
        setVideoRecords(prev => [...prev, currentFriend]);
        setRecords(prev => [...prev, newRecord]);
        toast.success(`You are scheduling a video call with ${currentFriend.name}`);
    }
    const data = {
        callRecords, setCallRecords,
        textRecords, setTextRecords,
        videoRecords, setVideoRecords,
        records, setRecords,
        handleCallRecords,
        handleTextRecords,
        handleVideoRecords,
    };
    return (
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;