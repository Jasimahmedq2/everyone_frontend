/* eslint-disable react/prop-types */
// src/components/Pull.js
import { useState, useEffect } from "react";
import { useUpdatePullVoteMutation } from "../../redux/features/post/postApi";
import { useSelector } from "react-redux";

const Pull = ({ post }) => {
  const [options, setOptions] = useState(post?.pull || []);
  const { loginInfo } = useSelector((state) => state.auth);
  const [updateVotesPull, { isLoading }] = useUpdatePullVoteMutation();

  useEffect(() => {
    setOptions(post?.pull || []);
  }, [post]);

  const handleVote = (id) => {
    const info = {
      token: loginInfo?.token,
      pull_id: id,
      post_id: post?._id,
    };

    updateVotesPull(info);
    setOptions(
      options.map((option) =>
        option.id === id ? { ...option, votes: option.votes + 1 } : option
      )
    );
  };

  const totalVotes = options.reduce((total, option) => total + option.votes, 0);

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">{post?.text}</h2>
      {options.map((option) => (
        <div key={option.id} className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-lg text-gray-700">{option.text}</span>
            <button
              onClick={() => handleVote(option._id)}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Vote
            </button>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-blue-500 h-4 rounded-full"
              style={{
                width: `${
                  totalVotes === 0 ? 0 : (option.votes / totalVotes) * 100
                }%`,
              }}
            ></div>
          </div>
          <div className="text-right text-sm text-gray-600 mt-1">
            {option.users?.length} votes
          </div>
        </div>
      ))}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800">Results:</h3>
        {options.map((option) => (
          <div
            key={option._id}
            className="flex items-center justify-between mt-2"
          >
            <span>{option.text}</span>
            <span>{option.users?.length} votes</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pull;
