import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();

export const useAuth = ()=>(
   useContext(AuthContext)
);

export const AuthProvider= ({children})=>{
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(()=>{
        const UserId = localStorage.getItem('userId');
        if(UserId){
           setCurrentUser(UserId);
        }
    }
    ,[]);
    const value ={
        setCurrentUser, currentUser
    }
    return <AuthContext.Provider value = {value}>{children}</AuthContext.Provider>
}