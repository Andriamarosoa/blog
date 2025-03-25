import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import Login from "../pages/login";
import { userService } from "../services/userService";

interface UserContextType {
  user: any | null;
  token: string | null; 
  logout: () => void;
  login: (tokenObject:any) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children ,strict=true}: { children: ReactNode ,strict?:boolean}) => {
  const [user, setUser] = useState<number | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

  
  const login =(tokenObject:any)=>{
    if(tokenObject){
      
      setUser(tokenObject.user)
      setToken(tokenObject.value)
      localStorage.setItem("token",tokenObject.value)
    }
    else
      logout()
  }

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };
  useEffect(()=>{
    if(localStorage.getItem("token") && !user){
      userService.test(localStorage.getItem("token")!).then(login)
    }
  },[])
  return (
    <UserContext.Provider value={{ user, token, logout,login }}>
        {(!token && strict) && <Login login={login} logout={logout} />  || children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};