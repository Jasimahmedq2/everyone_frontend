/* eslint-disable react/prop-types */

const ShowImage = ({ url }) => {
  return (
    <div className="p-2 rounded-lg">
      <img style={{ maxHeight: "25rem", width: "100%" }} src={url} alt="" />
    </div>
  );
};

export default ShowImage;
