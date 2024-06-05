// eslint-disable-next-line react/prop-types
const PetIcon = ({ currentColor }) => {

  return (
    <ul className="list-none">
      <li className="flex items-center">
        <span
          className={`inline-block h-3 w-3 rounded-full ${currentColor} mr-2`}
        ></span>
      </li>
    </ul>
  );
};

export default PetIcon;
