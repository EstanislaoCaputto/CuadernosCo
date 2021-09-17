import { createContext, useState } from "react";
const UserContex = createContext({});

export const UserProvider = ({children}) => {
    const [user, setUser] = useState("");
    const [telefono, setTelefono] = useState("");
    const [mail, setMail] = useState("");

    const AgregarUsuario = (nombre, numero, email) =>{
        setUser(nombre);
        setTelefono(numero);
        setMail(email);
    }
    const CerrarSesion = () => {
        setUser();
        setTelefono();
        setMail();
    }
    return(
        <UserContex.Provider value={{user, telefono, mail, AgregarUsuario, CerrarSesion}}>
            {children}
        </UserContex.Provider>
    )
}
export default UserContex