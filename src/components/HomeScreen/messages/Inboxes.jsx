import { Avatar, Select, SelectItem } from "@nextui-org/react";
import hoverMessageIcon from "../../../assets/hoverMessageIcon.png"
import profilePhoto5 from "../../../assets/profile-image-here-5.png";
import profilePhoto4 from "../../../assets/profile-image-here-4.png";

const users = [
  {
    image: hoverMessageIcon,
    name: "tamim iqbal",
    email: "tamim@gmail.com",
    id: 1,
    data: {
      image: hoverMessageIcon,
      name: "tamim iqbal",
      email: "tamim@gmail.com",
    },
  },
  {
    image: profilePhoto5,
    name: "tamim iqbal2",
    email: "(123) 243-2343",
    id: 2,
    data: {
      image: profilePhoto5,
      name: "tamim iqbal2",
      email: "(123) 243-2343",
    },
  },
  {
    image: profilePhoto4,
    name: "tamim iqbal3",
    email: "(153) 143-5943",
    id: 3,
    data: {
      image: profilePhoto4,
      name: "tamim iqbal3",
      email: "(153) 143-5943",
    },
  },
];

const Inboxes = () => {
  return (
    <Select
      items={users}
      label=""
      placeholder="All Inboxes"
      labelPlacement="outside"
      classNames={{
        base: "bg-white",
        trigger: "h-14",
      }}
      className="mt-2 py-2 bg-[#F9F9F9] rounded-md relative"
      renderValue={(items) => {
        return items.map((item) => (
          <div key={item.id} className="flex items-center gap-2">
            <Avatar
              alt={item.data.name}
              className="flex-shrink-0"
              size="sm"
              src={item.data.image}
            />
            <div className="flex flex-col">
              <span>{item.name}</span>
              <span className="text-default-500 text-tiny">({item.data.email})</span>
            </div>
          </div>
        ));
      }}
    >
      {(user) => (
        <SelectItem key={user.id} textValue={user.name}>
          <div className="flex gap-2 justify-center items-center font-poppins rounded-2xl p-2 w-full hover:bg-indigo-50 cursor-pointer text-black text-sm">
            <Avatar
              alt={user.name}
              className="flex-shrink-0"
              size="sm"
              src={user.image}
            />
            <div className="grow flex justify-between text-xs">
              <div className="flex flex-col">
                <span className="text-small">{user.name}</span>
                <span className="text-tiny text-default-400">{user.email}</span>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-small">1 min ago</p>
                <p className="text-white bg-red-400 rounded-full h-6 w-6 text-sm font-semibold  flex items-center justify-center text-right border">
                  2
                </p>
              </div>
            </div>
          </div>
        </SelectItem>
      )}
    </Select>
  );
};

export default Inboxes;
