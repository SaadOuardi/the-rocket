import React, { createContext, useState, useEffect } from 'react';
import { getUserFromStorage, saveUserToStorage } from '../../../utils/storage';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => getUserFromStorage());

    useEffect(() => {
        saveUserToStorage(user);
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;

// import React, { createContext, useState } from 'react';

// export const UserContext = createContext();

// const UserProvider = ({ children }) => {
//     const [user, setUser] = useState({
//         userId: localStorage.getItem('userId') || null,
//         userType: localStorage.getItem('userType') || null,
//         token: localStorage.getItem('token') || null,
//     });

//     return (
//         <UserContext.Provider value={{ user, setUser }}>
//             {children}
//         </UserContext.Provider>
//     );
// };

// export default UserProvider;