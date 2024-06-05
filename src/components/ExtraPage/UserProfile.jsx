import { useState } from "react";
import { useCreateOrUpdateProfileMutation, useGetProfileQuery } from "../../redux/features/auth/profileApi";

const UserProfile = () => {
    const { data: profile, refetch: refetchProfile } = useGetProfileQuery();
    const [createOrUpdateProfile] = useCreateOrUpdateProfileMutation();

    const [userName, setUserName] = useState(profile?.user_name || "");
    const [bio, setBio] = useState(profile?.bio || "");
    const [birthday, setBirthday] = useState(profile?.birthday || "");
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createOrUpdateProfile({ user_name: userName, bio, birthday, file });
            refetchProfile();
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col bg-white text-black border w-60" >
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Username"
                className="bg-white text-black border"
            />
            <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Bio"
                className="bg-white text-black border"
            />
            <input
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                placeholder="Birthday"
                className="bg-white text-black border"
            />
            <input
                type="file"
                className="bg-white text-black border"
                onChange={(e) => setFile(e.target.files[0])}
            />
            <button type="submit">Save Profile</button>
        </form>
    );
};

export default UserProfile;
