// import React, { createContext, useContext, useEffect, useState } from "react";
// // import { getUserOnEveryReload } from "../utils/userPersist";
// import { useAuth0 } from "@auth0/auth0-react";

// // create context
// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {

//   // get token from cookie
//   // const token = Cookies.get("token");

//   // loading state
//   const [loading, setLoading] = useState(false);

//   const [user, setUser] = useState(true);
//   const [userReload, setUserReload] = useState(false);

//   // recent new filter
//   const [recentNew, setRecentNew] = useState("recent");
//   // all user-card
//   const [userCard, setUserCard] = useState(null);
//   const [userCardReload, setUserCardReload] = useState(true);

//   //
//   const [commentsById, setCommentsById] = useState("");

//   // user persistent on every reload
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     if (token) {
//   //       try {
//   //         setLoading(true);
//   //         const getUserFromDb = await getUserOnEveryReload();
//   //         setUser(getUserFromDb);
//   //         setLoading(false);
//   //       } catch (error) {
//   //         setLoading(false);
//   //         console.error('Error in useEffect:', error);
//   //       }
//   //     }
//   //   };
//   //   fetchData();
//   // }, [token, userReload]);
//   const { loginWithRedirect, user: currentTarget, } = useAuth0();

//   console.log('Auth0-user:', currentTarget);
//   console.log('user:', user);
//   console.log('commentsById:', commentsById);

//   const setUserByLogin = () => {
//     setUser(true);
//   }

//   const contextValue = {
//     loading, setLoading,   // loading state
//     user, setUser,
//     setUserReload,
//     recentNew, setRecentNew,
//     userCard, setUserCard,
//     userCardReload, setUserCardReload,
//     setUserByLogin,
//     commentsById, setCommentsById
//   };

//   return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
// };

// // export AuthContext to use easily
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// export default AuthProvider;