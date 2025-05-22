//React Context : it is general Global Object which stores data and can be accessed anywhere in the App
import { createContext } from "react";

const UserContext = createContext({
    user : "Default User"
});

export default UserContext;