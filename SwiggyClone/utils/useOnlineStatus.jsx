import { useState, useEffect } from "react";

const useOnlineStatus = () => {

    // state variable to store the online status
    const [onlineStatus, setOnlineStatus] = useState(true); 
    //check if the user is online or offline using the window object event listeners

    useEffect(() =>{
        window,addEventListener("offline", () => { 
            setOnlineStatus(false);
        }); 

        window.addEventListener("online", () => {
            setOnlineStatus(true);
        }); }, []);

    return onlineStatus;
};

export default useOnlineStatus;