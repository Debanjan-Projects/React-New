import { createContext } from "react";

 export const context = createContext();


 const ContextProvider = (props) =>{


    const onSent = async (prompt) =>{
        
    }


    const contextValue = {

    }

    return (
        <ContextProvider value={contextValue}>
            {props.children}
        </ContextProvider>
    )
 }

 export default ContextProvider
