export const getUserFromStorage = () => ({
    userId: localStorage.getItem('userId') || null,
    userType: localStorage.getItem('userType') || null,
    token: localStorage.getItem('token') || null,
});

export const saveUserToStorage = (user) => {
    if (user) {
        localStorage.setItem('userId', user.userId || '');
        localStorage.setItem('userType', user.userType || '');
        localStorage.setItem('token', user.token || '');
    } else {
        localStorage.clear();
    }
};