import React from "react";
import { Link, useLocation } from "react-router-dom";
export interface ISchoolMenuProps {}

const SchoolMenu: React.FunctionComponent<ISchoolMenuProps> = (props) => {
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
          to="/candidatures"
          className={`text-black text-2xl font-medium font-marianne-medium leading-tight ${linkClass(
            "/candidatures"
          )}`}
        >
          Candidatures
        </Link>
      </li>
      <li className="pt-[5px] pb-2.5 justify-start items-start gap-2.5 inline-flex">
        <Link
          to="/gestion-formations"
          className={`text-black text-2xl font-medium font-marianne-medium leading-tight ${linkClass(
            "/gestion-formations"
          )}`}
        >
          Formations
        </Link>
      </li>
      <li className="pt-[5px] pb-2.5 justify-start items-start gap-2.5 inline-flex">
        <Link
          to="/messagerie-prepare"
          className={`text-black text-2xl font-medium font-marianne-medium leading-tight ${linkClass(
            "/messagerie-prepare"
          )}`}
        >
          Messagerie
        </Link>
      </li>
      <li className="pt-[5px] pb-2.5 justify-start items-start gap-2.5 inline-flex">
        <Link
          to="/ambas"
          className={`text-black text-2xl font-medium font-marianne-medium leading-tight ${linkClass(
            "/ambas"
          )}`}
        >
          Ambassadeurs
        </Link>
      </li>
    </ul>
  );
};

export default SchoolMenu;
