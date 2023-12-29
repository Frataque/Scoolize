import React from 'react';
import DropdownArrow from "../../assets/icons/dropdown-arrow.svg"

export interface IFormationFilterPageProps { };

const FormationFilterPage: React.FunctionComponent<IFormationFilterPageProps> = (props) => {

  const handleFilterClick = () => {
    // Implement what happens when the filter icon is clicked
    console.log('Filter icon clicked');
  };

  return (<div className='w-full md:w-auto'>
    <div className="flex items-center justify-between border-b-2 border-dark-blue pb-2 w-[342px] w-100%">
      <span className="text-lg font-normal-marianne text-black leading-tight">Filtres</span>
      <button
        onClick={handleFilterClick}
        className="p-2 rounded-full hover:bg-gray-200"
      >
      <img src={DropdownArrow} alt="Dropdown arrow" />
      </button>
    </div>
  </div>)
}

export default FormationFilterPage