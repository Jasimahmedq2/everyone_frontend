import AddComment from "./addComment";
import MessageComponent from "./MessageComponent";
const CommentCard = () => {
  return (
    <div>
      <MessageComponent />
      <MessageComponent />
      <MessageComponent />
      <MessageComponent />
      {/* view reply */}
      <div className="text-center cursor-pointer mt-4">
        <p className="text-[#64748B] font-bold">View 30 Replies</p>
      </div>

      <AddComment />
    </div>
  );
};

export default CommentCard;
