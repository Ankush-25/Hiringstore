import { Children, createContext, useContext, useEffect } from "react";
const AuthContext = createContext();

const useAuth = ()=>(
   useContext(AuthContext)
)
const AuthProvider= ({Children})=>{

    useEffect(()=>{
        const [currentUser, setCurrentUser] = useState(null);
        const UserId = localStorage.getItem('userId');
        if(UserId){
           setCurrentUser(UserId);
        }
    }
    ,[]);
    const value ={
        setCurrentUser, currentUser
    }
    return <AuthProvider value = {value}>{Children}</AuthProvider>
}