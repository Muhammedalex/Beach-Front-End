import React from "react";
import BoraBora from "../assests/borabora.jpg";
import BoraBora2 from "../assests/borabora2.jpg";
import Maldives from "../assests/maldives.jpg";
import Maldives2 from "../assests/maldives2.jpg";
import Maldives3 from "../assests/maldives3.jpg";
import KeyWest from "../assests/keywest.jpg";
import SelectCard from "./SelectCard";

const Select = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectCard bg={BoraBora} text="BoraBora" />
      <SelectCard bg={BoraBora2} text="Maldives" />
      <SelectCard bg={Maldives} text="Antigua" />
      <SelectCard bg={Maldives2} text="Cozumel" />
      <SelectCard bg={Maldives3} text="Jamaica" />
      <SelectCard bg={KeyWest} text="Key West" />
    </div>
  );
};

export default Select;
