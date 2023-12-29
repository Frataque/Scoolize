import React, { useState } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';

export interface ISearchBarPageProps { };

const SearchBarPage1: React.FunctionComponent<ISearchBarPageProps> = (props) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Implement your search logic here
        console.log(`Searching for: ${searchTerm}`);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="w-full md:w-[522px]">
            <form onSubmit={handleSearch} className="flex items-center border-b-2 border-dark-blue">
                <input
                    type="text"
                    placeholder="Ex: BTS Droit Lyon"
                    value={searchTerm}
                    onChange={handleChange}
                    className="px-4 py-2 w-full font-marianne bg-light-grey text-black-ish text-neutral-900 text-base rounded-tl"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 bg-dark-blue hover:bg-light-blue font-marianne rounded-tr text-base font-normal flex items-center gap-2"
                >
                    <SearchIcon width="20" height="20" />
                    Rechercher
                </button>
            </form>
        </div>
    );
}

export default SearchBarPage1