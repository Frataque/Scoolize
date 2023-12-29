import React, { useState } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'

export interface ISearchBarPageProps {};

const SearchBarPage: React.FunctionComponent<ISearchBarPageProps> = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(`Searching for: ${searchTerm}`);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="w-full md:w-auto">
            <form onSubmit={handleSearch} className="flex items-center border-b-2 border-dark-blue">
                <input
                    type="text"
                    placeholder="Ex: BTS Droit Lyon"
                    value={searchTerm}
                    onChange={handleChange}
                    className="px-4 py-2 w-[357px] font-marianne bg-light-grey text-black-ish text-neutral-900 text-base rounded-tl"
                />
                <button
                    type="submit"
                    className="flex items-center w-[165px] bg-blue-600 text-white px-4 py-2 bg-dark-blue hover:bg-light-blue font-marianne rounded-tr text-base"
                >
                    {/* Include the SVG right before the button text */}
                    <SearchIcon className="mr-2" /> {/* Adjust the size and margins as needed */}
                    Rechercher
                </button>
            </form>
        </div>
    );
}

export default SearchBarPage;
