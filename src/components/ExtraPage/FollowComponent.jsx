import React from "react"
import { useFollowUserMutation, useGetAllFollowersQuery, useGetAllFollowingQuery, useUnfollowUserMutation } from "../../redux/features/follow/followApi";

const FollowComponent = () => {
    const [followUser] = useFollowUserMutation();
    const [unfollowUser] = useUnfollowUserMutation();
    const { data: followers, refetch: refetchFollowers } = useGetAllFollowersQuery();
    const { data: following, refetch: refetchFollowing } = useGetAllFollowingQuery();

    const handleFollow = async (userId) => {
        try {
            await followUser(userId);
            refetchFollowers();
            refetchFollowing();
        } catch (error) {
            console.error('Error following user:', error);
        }
    };

    const handleUnfollow = async (userId) => {
        try {
            await unfollowUser(userId);
            refetchFollowers();
            refetchFollowing();
        } catch (error) {
            console.error('Error unfollowing user:', error);
        }
    };

    return (
        <div>
            <h1>Followers</h1>
            <ul>
                {followers?.map(follower => (
                    <li key={follower.id}>{follower.name}</li>
                ))}
            </ul>
            <h1>Following</h1>
            <ul>
                {following?.map(user => (
                    <li key={user.id}>
                        {user.name}
                        <button onClick={() => handleUnfollow(user.id)}>Unfollow</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FollowComponent;