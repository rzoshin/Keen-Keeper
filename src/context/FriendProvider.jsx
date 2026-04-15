import { createContext, use, useState } from "react";

export const FriendContext = createContext();
const friendsPromise = fetch("/friendsData.json").then(res => res.json());

const FriendProvider = ({children}) => {

    const data = use(friendsPromise);
    return (
        <FriendContext.Provider value={{data}}>
            {children}
        </FriendContext.Provider>
    );
}

export default FriendProvider;