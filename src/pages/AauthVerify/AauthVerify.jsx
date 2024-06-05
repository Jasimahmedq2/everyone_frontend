import React from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthVerifyMutation } from "../../redux/features/auth/authApi";

const AauthVerify = () => {
    const navigate = useNavigate();
    const { verifyToken } = useParams();
    const [postAuthVerify, { isLoading, isError, isSuccess }] = useAuthVerifyMutation();

    const clickVerifyButton = async () => {
        try {
            console.log('verifyToken:', verifyToken);
            // const res = await fetch(
            //     `${import.meta.env.VITE_SERVER_URL}/auth/verify/${verifyToken}`,
            //     {
            //         method: "POST", // *GET, POST, PUT, DELETE, etc.
            //         headers: {
            //             "Content-Type": "application/json",
            //         },
            //     }
            // );
            // const responseData = await res.json();
            // console.log(responseData);
            postAuthVerify(verifyToken);
            // toast.success("Verify success");
            // navigate("/login");
        } catch (error) {
            // toast.error("Verify success");
            console.error("catch error:", error)
        }
    };

    React.useEffect(() => {
      
        if (!isLoading && isSuccess) {
            toast.success("Verify success");
            navigate("/login");
        };
        if (!isLoading && isError) {
            toast.error("Error Try late ", { id: "auth-verifying" })
        };

    }, [isLoading, isSuccess, isError, navigate]);

    return (
        <div className="bg-white flex items-center justify-center min-h-screen">
            <div>
                <div className="self-center text-2xl font-poppins text-neutral-900 font-medium text-black text-center">
                    Welcome to  Everyone
                </div>

                <button
                    className="justify-center items-center px-16 py-3.5 mt-4 font-poppins font-semibold text-white bg-rose-500 rounded-lg max-md:px-5 cursor-pointer w-full"
                    onClick={clickVerifyButton}
                >
                    Click to  Verify
                </button>
            </div>
        </div>

    );
}

export default AauthVerify;