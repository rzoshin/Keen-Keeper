import { createContext, use, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({children}) => {
    const data = 1;
    return (
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;