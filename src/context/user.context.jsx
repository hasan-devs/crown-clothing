import { createContext,useState,useEffect } from "react";
import {onAuthUserStateChangeListener,createUserDocumentFromAuth} from '../utils/firebase/firebase';

export const UserContext = createContext({
    currentUser : null,
    setCurrentUser : () => null
});

export const UserProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(null);
    const value = {currentUser,setCurrentUser};

    useEffect(()=>{
        const unsubscribe = onAuthUserStateChangeListener((user)=>{
            if(user){
                createUserDocumentFromAuth(user)
            }
            // console.log(user);
            setCurrentUser(user);
        })

        return unsubscribe;
    },[]);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserProvider;