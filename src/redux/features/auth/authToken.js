export const setAuthToken = (token) => {
    localStorage.setItem("authToken", token);
    return;
};

export const getAuthToken = () => {
    return localStorage.getItem("authToken");
};
