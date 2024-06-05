import { CiHeart } from "react-icons/ci";
import { TbMessage } from "react-icons/tb";
import profilePhoto from "../../../assets/Ellipse47.png";
import { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";

const MessageComponent = () => {
    const [replayBoxShow, setReplayBoxShow] = useState(false);
    const [replayBoxText, setReplayBoxText] = useState("");

    const riplayButtonPress = () => {
        if (replayBoxText.length < 1) return;
        console.log('replayBoxText:', replayBoxText);
    }

    const replyAnsButtonClass = "shrink-0 h-8 w-8 bg-green-600 border border-green-600  hover:bg-green-700 rounded-full grid place-items-center text-white hover:px-2 transition-all"

    return (
        <div>
            <div className="flex justify-between items-center mt-6 space-x-2 sm:space-x-6">
                <div className="flex items-center space-x-2">
                    <div className="mr-2">
                        <img
                            src={profilePhoto}
                            alt="userName"
                            className=" h-12 w-12 rounded-full object-cover"
                        />
                    </div>
                    <h4 className="text-md font-medium text-[#1C1E25]">Judith Rodriguez</h4>
                </div>

                <div className="flex space-x-2">
                    <span className="cursor-pointer">
                        {" "}
                        <CiHeart className="text-xl sm:text-2xl" />
                    </span>
                    <span className="cursor-pointer">
                        {" "}
                        <TbMessage className="text-xl sm:text-2xl" />
                    </span>
                </div>
            </div>
            {/* comments */}
            <div className="mt-4">
                <p className="text-[#1E1E1E] w-full font-semibold text-start ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis neque sit amet lacus sodales, id maximus neque molestie
                </p>
            </div>
            <div className="flex items-center space-x-4 text-[#64748B] mt-2">
                <p>2 mins ago</p>
                {
                    !replayBoxShow && <p className="cursor-pointer" onClick={() => setReplayBoxShow((prev) => !prev)}>Reply</p>
                }

            </div>
            <div>
                {
                    replayBoxShow && <div className='flex items-end gap-3 my-5'>
                        <textarea
                            placeholder='Reply'
                            onChange={(e) => setReplayBoxText(e.target.value)}
                            type='text'
                            name="ans"
                            className='px-2 w-full border border-gray-200 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-900 text-slate-700 dark:text-slate-400 h-8 min-h-8 max-h-96'
                        />
                        <button
                            className={replyAnsButtonClass}
                            onClick={riplayButtonPress}
                        >
                            <BsArrowRightShort size={30} />
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}

export default MessageComponent;