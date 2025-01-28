import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        const userType = localStorage.getItem('userType');

        if (userId && userType) {
            setUser({ userId, userType });
        }
    }, []);

    const updateUser = (userData) => {
        setUser(userData);
    };

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
