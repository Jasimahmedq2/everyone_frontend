import { useState } from "react";
import { useCreatePostMutation, useGetAllFeedPostsQuery } from "../../redux/features/post/postApi";


const PostFeed = () => {
    const { data: posts, refetch: refetchPosts } = useGetAllFeedPostsQuery();
    const [createPost] = useCreatePostMutation();

    const [text, setText] = useState("");
    const [postType, setPostType] = useState("pull");
    const [pullOptions, setPullOptions] = useState(["pull1", "pull2"]);
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createPost({ text, post_type: postType, pull: pullOptions, file });
            refetchPosts();
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Post text"
                />
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <button type="submit">Create Post</button>
            </form>
            <div>
                {posts?.map(post => (
                    <div key={post.id}>
                        <p>{post.text}</p>
                        {/* Render other post details */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostFeed;
