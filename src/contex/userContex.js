import { createContext, useState } from "react";
const UserContex = createContext({});

export const UserProvider = ({children}) => {
    const [user, setUser] = useState("");

    const AgregarUsuario = (nombre) =>{
        setUser(nombre)
    }
    const CerrarSesion = () => {
        setUser()
    }
    return(
        <UserContex.Provider value={{user, AgregarUsuario, CerrarSesion}}>
            {children}
        </UserContex.Provider>
    )
}
export default UserContex