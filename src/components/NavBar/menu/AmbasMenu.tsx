import React from "react";
import { Link, useLocation } from "react-router-dom";
export interface IAmbasMenuProps {}

const AmbasMenu: React.FunctionComponent<IAmbasMenuProps> = (props) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const linkClass = (path: string) => {
    return isActive(path) ? "border-b-2 border-dark-blue" : "";
  };
  return (
    <ul className="w-[151px] h-[370px] pl-[15px] pb-[372px] flex-col justify-start items-start gap-8 inline-flex">
      <li className="pt-[5px] pb-2.5 justify-start items-start gap-2.5 inline-flex">
        <Link
          to="/"
          className={`text-black text-2xl font-medium font-marianne-medium leading-tight ${linkClass(
            "/"
          )}`}
        >
          Accueil
        </Link>
      </li>
      <li className="pt-[5px] pb-2.5 justify-start items-start gap-2.5 inline-flex">
        <Link
          to="/messagerie"
          className={`text-black text-2xl font-medium font-marianne-medium leading-tight ${linkClass(
            "/messagerie"
          )}`}
        >
          Messagerie
        </Link>
      </li>
    </ul>
  );
};

export default AmbasMenu;
