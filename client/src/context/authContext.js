import { createContext, useEffect, useState } from "react";
import { loginUser } from "../services/Login";
import { logoutUser } from "../services/Logout";


export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null)

    const login = async (inputs) => {

        //from services
        await loginUser(inputs).then((result) => {
            setCurrentUser(result.data)
        })
    }

    const logout = async (inputs) => {
        await logoutUser().then(() => {
          setCurrentUser(null);  
        })
        
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    },[currentUser]);

    return (
        <AuthContext.Provider value={{currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}