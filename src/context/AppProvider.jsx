import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppProvider = ({children}) => {
    const [records, setRecords] = useState([]);

    const handleCallRecords = (currentFriend) => {
        const newRecord = {...currentFriend, interactionType: "Call", today: new Date()};
        console.log("ADDING:", newRecord, typeof newRecord.today);
        
        setRecords(prev => [...prev, newRecord]);
        toast.info(`You are calling ${currentFriend.name}`);
    }
    const handleTextRecords = (currentFriend) => {
        const newRecord = {...currentFriend, interactionType: "Text", today: new Date()};
        setRecords(prev => [...prev, newRecord]);
        toast.success(`You are texting ${currentFriend.name}`);
    }
    const handleVideoRecords = (currentFriend) => {
        const newRecord = {...currentFriend, interactionType: "Video", today: new Date()};
        setRecords(prev => [...prev, newRecord]);
        toast.info(`You are video calling ${currentFriend.name}`);
    }
    const data = {
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