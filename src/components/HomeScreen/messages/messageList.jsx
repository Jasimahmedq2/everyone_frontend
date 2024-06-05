import UserItem from "./userItem";
import profilePhoto1 from "../../../assets/profile-image-here-1.png";
import profilePhoto2 from "../../../assets/profile-image-here-2.png";
import profilePhoto3 from "../../../assets/profile-image-here-3.png";
import profilePhoto4 from "../../../assets/profile-image-here-4.png";
import profilePhoto5 from "../../../assets/profile-image-here-5.png";
import profilePhoto6 from "../../../assets/profile-image-here-6.png";
import profilePhoto7 from "../../../assets/profile-image-here-7.png";
import profilePhoto8 from "../../../assets/profile-image-here-8.png";
import chatProfieleImage from "../../../assets/chat-profile-image.png";
import messageProfileImage from "../../../assets/message-profile-image.png";

const MessageList = () => {
  // Example messages data
  const messages = [
    {
      id: 1,
      userProfile: "active",
      userName: "Raheel Khan",
      time: "5 min ago",
      message: "Hello, how are you?",
      userImage: profilePhoto1,
    },
    {
      id: 2,
      userProfile: "inactive",
      userName: "Jane Smith",
      time: "20 min ago",
      message: "I am doing fine, thank you!",
      userImage: profilePhoto2,
    },
    {
      id: 3,
      userProfile: "inactive",
      userName: "Edward Lake",
      time: "30 min ago",
      message: "I am doing fine, thank you!",
      userImage: profilePhoto3,
    },
    {
      id: 4,
      userProfile: "inactive",
      userName: "James Hall",
      time: "35 min ago",
      message: "I am doing fine, thank you!",
      userImage: messageProfileImage,
    },
    {
      id: 5,
      userProfile: "inactive",
      userName: "Katie Sims",
      time: "55 min ago",
      message: "I am doing fine, thank you!",
      userImage: chatProfieleImage,
    },
    {
      id: 6,
      userProfile: "inactive",
      userName: "Patricia Sand",
      time: "56 min ago",
      message: "I am doing fine, thank you!",
      userImage: profilePhoto4,
    },
    {
      id: 7,
      userProfile: "inactive",
      userName: "Dukes Luka",
      time: "56 min ago",
      message: "I am doing fine, thank you!",
      userImage: profilePhoto5,
    },
    {
      id: 8,
      userProfile: "inactive",
      userName: "William Smith",
      time: "58 min ago",
      message: "I am doing fine, thank you!",
      userImage: profilePhoto6,
    },
    {
      id: 9,
      userProfile: "inactive",
      userName: "Barak Obama",
      time: "59 min ago",
      message: "I am doing fine, thank you!",
      userImage: profilePhoto7,
    },
    {
      id: 10,
      userProfile: "inactive",
      userName: "Mark Jakarbarg",
      time: "59 min ago",
      message: "I am doing fine, thank you!",
      userImage: profilePhoto8,
    },
    // Add more messages as needed
  ];

  return (
    <div>
      {messages.map((message) => (
        <UserItem
          key={message.id}
          userProfile={message.userProfile}
          userName={message.userName}
          time={message.time}
          message={message.message}
          userImage={message.userImage}
        />
      ))}
    </div>
  );
};

export default MessageList;
