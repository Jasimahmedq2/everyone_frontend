import { useSelector } from "react-redux";
import { TheredCard } from "../../../pages/UploadandThread/TheredCard";
import { useGetAllFeedPostsQuery } from "../../../redux/features/post/postApi";
import DisplayUser from "../user/displayUser";
import PostInputField from "./PostInputField";
import { PDFViewer } from "@react-pdf/renderer";
import PdfComponent from "../../ExtraPage/pdfComponent";
import ShowImage from "../../ExtraPage/ShowImages";
import { pdfjs } from "react-pdf";
import SkeletonCard from "../comment/sceletonLoading";
import Pull from "../../pull/Pull";
import Reel from "./videoScreen/reel";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const FeedContent = () => {
  const { loginInfo } = useSelector((state) => state.auth);
  const { data, isLoading } = useGetAllFeedPostsQuery(loginInfo?.token);

  if (isLoading) {
    return <SkeletonCard />;
  }

  return (
    <div className="w-[40%] mx-auto">
      <PostInputField />
      {data?.data?.map((post) => {
        const singleFile = post?.files[0] || "";
        let extension;
        if (singleFile) {
          extension = singleFile?.split(".").pop().split(/#|\?/)[0];
        }
        const postText = post?.text;
        const displayFile = singleFile;

        return (
          <>
            {isLoading ? (
              <SkeletonCard />
            ) : (
              <div key={post?._id}>
                <DisplayUser user={post?.user} post={post} />
                <div className="max-w-[30rem] mx-auto">
                  <div className="py-4 px-2">
                    <p>{postText}</p>
                  </div>
                  {post?.post_type === "pull" && (
                    <div className="mt-4">
                      <Pull post={post} />
                    </div>
                  )}
                  {displayFile && extension === "mp4" && (
                    <div className="mt-4">
                      <Reel post={post} displayFile={displayFile} />
                      {/* <TheredCard /> */}
                    </div>
                  )}
                  {displayFile && extension === "pdf" && (
                    <PDFViewer>
                      <PdfComponent url={displayFile} />
                    </PDFViewer>
                  )}
                  {displayFile &&
                    ["png", "jpg", "jpeg"].includes(extension) && (
                      <ShowImage url={displayFile} />
                    )}
                </div>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default FeedContent;
