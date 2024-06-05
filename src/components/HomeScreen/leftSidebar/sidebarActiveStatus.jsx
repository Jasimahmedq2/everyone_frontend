import { Select, SelectItem } from "@nextui-org/react";
import PetIcon from "./PetIcon";
import { useState } from "react";

const status = [
  {
    value: "active",
    label: "Active",
  },
  {
    value: "busy",
    label: "Busy",
  },
  {
    value: "away",
    label: "Away",
  },
  {
    value: "online",
    label: "Online",
  },
  {
    value: "offline",
    label: "Offline",
  },
];

const SidebarActiveStatus = () => {
  const [currentColor, setCurrentColler] = useState("bg-green-500");
  const handleChangeColor = (color) => {
    if (color === "active") {
      setCurrentColler("bg-green-500");
    } else if (color === "busy") {
      setCurrentColler("bg-[#F7393B]");
    } else if (color === "away") {
      setCurrentColler("bg-[#FFB604]");
    } else if (color === "offline") {
      setCurrentColler("bg-[#858585]");
    }
  };

  return (
    <div>
      {" "}
      <Select
        startContent={<PetIcon currentColor={currentColor} />}
        defaultSelectedKeys={["online"]}
        className="py-2 mt-4 border border-black rounded-lg w-full"
      >
        {status.map((st) => (
          <SelectItem
            onClick={() => handleChangeColor(st?.value)}
            key={st.value}
            value={st.value}
          >
            {st.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default SidebarActiveStatus;
