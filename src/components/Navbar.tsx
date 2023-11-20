import { useState } from "react";
import Hamburger from "./Hamburger";

function Navbar() {
  const [isOpenNavMenu, setIsOpenNavMenu] = useState<boolean>(false);

  return (
    <nav className="bg-teal-700 fixed w-full">
      <div className="p-3 flex justify-between items-center">
        <h3 className="text-white font-bold">Daily Savings</h3>
        <Hamburger onToggle={() => setIsOpenNavMenu((prev) => !prev)} />
      </div>
      {isOpenNavMenu && (
        <ul className="divide-y divide-white border-y border-white">
          <li>
            <button className="py-2 text-white text-center w-full hover:bg-teal-600">
              Logout
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
