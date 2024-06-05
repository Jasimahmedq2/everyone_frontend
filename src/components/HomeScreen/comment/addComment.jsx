import { Input } from "@nextui-org/react";
import { HiAtSymbol } from "react-icons/hi2";
import { MdOutlineEmojiEmotions } from "react-icons/md";

const AddComment = () => {
  return (
    <div className="mt-6 flex items-center space-x-4">
      <Input
        type="text"
        size="lg"
        placeholder="Add Comment"
        labelPlacement="outside"
        className="bg-[#F9F9F9] rounded-3xl border"
        endContent={
          <div className="flex items-center space-x-2">
            <HiAtSymbol className="text-2xl text-red-400 pointer-events-none flex-shrink-0" />
            <MdOutlineEmojiEmotions className="text-2xl text-red-400 pointer-events-none flex-shrink-0" />
          </div>
        }
      />
      <p className="font-bold text-md cursor-pointer text-md">Send</p>
    </div>
  );
};

export default AddComment;
