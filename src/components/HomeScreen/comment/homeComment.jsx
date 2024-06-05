import DisplayCommentUser from "../user/displayCommentUser";
import TabsComponents from "./tabsComponents";

const HomeComment = () => {
  return (
    <div className="sm:w-[25%] sm:max-h-screen overflow-y-auto scrollbar_left_side_direction px-2 text-black">
      <div className="scrollbar_right_side_direction">
        <DisplayCommentUser />
        <TabsComponents />
      </div>
    </div>
  );
};

export default HomeComment;
