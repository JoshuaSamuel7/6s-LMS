import { createContext, useState } from "react";
import { users as initialUsers } from "../data/userData"; 
export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [role,setRole]=useState(localStorage.getItem("role")|| null);
    const [users,setUsers]=useState(initialUsers);
    const login=(username,password)=>{
        const user=users.find(u=> u.username===username);
        if(!user) return false;
        if(user.password===password){
            localStorage.setItem("role",user.role);
            setRole(user.role);
        }else{
            return false;
        }
    }
    const logout=()=>{
        setRole(null);
        localStorage.removeItem("role");
    }
    const register=(username,password,role)=>{
        const obj={
            id:Date.now(),
            username,
            password,
            role
        }
        setUsers((prev) => [...prev, obj]);

    }
    return(
            <AuthContext.Provider value={{role,setRole,login,logout,register}}>
                {children}
            </AuthContext.Provider>
    )
}