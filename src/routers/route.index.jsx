import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import MainLayout from "../Layout/MainLayout";
import HomeScreenComponent from "../components/HomeScreen/homeScreenComponent";
import Profile from "../components/profilePage/Profile";
import { UploadVideo } from "../pages/UploadandThread/UploadVideo";
import UploadPhoto from "../pages/threadsUpload/UploadPhoto";
import HomeAndThreadScreen from "../components/HomeScreen/HomeAndThreadScreen";
import HomeAndMessageScreen from "../components/HomeScreen/HomeAndMessageScreen";
import VerificationScreen from "../components/LoginWithCreadential/loginWithSocial/VerificationScreen";
import HomeAndMessageGroupScreen from "../components/HomeScreen/HomeAndMessageGroupScreen";
import PrivateGroup from "../pages/groupPages/PrivateGroup";
import PublicGroup from "../pages/groupPages/PublicGroup";
import ThreadsUpload from "../pages/threadsUpload/ThreadsUpload";
import ChatRoomOne from "../pages/chatRoomPages/ChatRoomOne";
import ChatRoomTwo from "../pages/chatRoomPages/ChatRoomTwo";
import ChatRoomThree from "../pages/chatRoomPages/ChatRoomThree";
import ChatRoomFive from "../pages/chatRoomPages/ChatRoomFive";
import ChatRoomFour from "../pages/chatRoomPages/ChatRoomFour";
import ProfileNoVideo from "../components/profilePage/ProfileNoVideo";
import AauthVerify from "../pages/AauthVerify/AauthVerify";
import SignUp from "../components/LoginWithCreadential/loginWithSocial/SignUp";
import Login from "../components/LoginWithCreadential/Login";
import UserProfileEdit from "../components/profilePage/userProfileEdit/UserProfileEdit";
import Pull from "../components/pull/Pull";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <HomeScreenComponent />,
                children: [
                    {
                        path: "/",
                        element: <HomeAndThreadScreen />,
                        children: [
                            {
                                path: "/login",
                                element: < Login />
                            },
                            {
                                path: "/signup",
                                element: <SignUp />,
                            },
                            {
                                path: "/login-verify",
                                element: <VerificationScreen />,
                            },
                            {
                                path: "/create-group",
                                element: <PrivateGroup />,
                            },
                            {
                                path: "/create-group/public",
                                element: <PublicGroup />,
                            },
                            {
                                path: "/create-chat-room/1",
                                element: <ChatRoomOne />,
                            },
                            {
                                path: "/create-chat-room/2",
                                element: <ChatRoomTwo />,
                            },
                            {
                                path: "/create-chat-room/3",
                                element: <ChatRoomThree />,
                            },
                            {
                                path: "/create-chat-room/4",
                                element: <ChatRoomFour />,
                            },
                            {
                                path: "/create-chat-room/5",
                                element: <ChatRoomFive />,
                            },
                            {
                                path: "/thread-upload",
                                element: <ThreadsUpload />,
                            },
                           
                        ]
                    },
                    {
                        path: "/message/group",
                        element: <HomeAndMessageGroupScreen />,
                    },
                    {
                        path: "/message/:id",
                        element: <HomeAndMessageScreen />,
                    },
                ]
            },
            {
                path: '/profile',
                element: <Profile />
            },
            
            {
                path: '/edit-profile',
                element: <UserProfileEdit/>
            },
             // pull
             {
                path: "/profile/pull",
                element: <Pull />,
            },
            {
                path: '/profile/no-video',
                element: <ProfileNoVideo />
            },
            {
                path: '/profile/upload-video',
                element: <UploadVideo />
            },
            {
                path: '/profile/upload-photo',
                element: <UploadPhoto />
            },
        ],
    },
    {
        path: "/verify/:verifyToken",
        element: <AauthVerify />
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

export default router;