import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react"
import { UserDetails } from "../types.dto"

const AuthContext = createContext<{
    user : UserDetails | null
    setUser : Dispatch<SetStateAction<UserDetails | null>>
}>({
    user : null,
    setUser : ()=>{}
})

export const AuthProvider = ({children}: {children : React.ReactNode })=>{
     const [user,setUser] = useState<UserDetails | null>(null)

    
      useEffect(() => {
    
        const userData = localStorage.getItem("userInfo");
        console.log("UserData",userData)
        if (userData) {
          try {
            
            setUser(JSON.parse(userData));
          } catch (err) {
            console.error("Invalid user data in localStorage", err);
          }
        }
      }, []);

      return (
        <AuthContext.Provider value={{ user, setUser }}>
        {children}
      </AuthContext.Provider>
      )
}   
     
export const useAuth = ()=> useContext(AuthContext)