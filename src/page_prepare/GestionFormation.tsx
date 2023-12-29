import React, { useState } from 'react';
import MainContentPage from './components/MainContent';
import SearchBarPage from './components/SearchBar';
import FormationFilterPage from './components/FilterFormation';
import ButtonFormationPage from './components/ButtonFormation';
import ModificationFormationPage from './components/ModificationFormation';
import FormationPopUpPage from './components/FormationPopUp';
import FormAddPopupPage from './components/FormAddPopup';

const GestionFormationPage: React.FC = () => {
    const [isFormationPopupOpen, setIsFormationPopupOpen] = useState(false);
    const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);

    const openFormationPopup = () => {
        setIsFormationPopupOpen(true);
        setIsAddPopupOpen(false); // Close the other popup if open
    };

    const closeFormationPopup = () => {
        setIsFormationPopupOpen(false);
    };

    const openAddPopup = () => {
        setIsAddPopupOpen(true);
        setIsFormationPopupOpen(false); // Close the other popup if open
    };

    const closeAddPopup = () => {
        setIsAddPopupOpen(false);
    };

    return (
        <div>
            <MainContentPage>
                <div className='container mx-auto p-4'>
                    <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-4 space-y-4 md:space-y-0'>
                        <SearchBarPage />
                        <FormationFilterPage />
                        <ButtonFormationPage onAddClick={openAddPopup}/>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-2 overflow-y-auto max-h-screen mb-4">
                        <ModificationFormationPage onButtonClick={openFormationPopup} />
                        <ModificationFormationPage onButtonClick={openFormationPopup} />
                        <ModificationFormationPage onButtonClick={openFormationPopup} />
                        <ModificationFormationPage onButtonClick={openFormationPopup} />
                        <ModificationFormationPage onButtonClick={openFormationPopup} />
                        <ModificationFormationPage onButtonClick={openFormationPopup} />
                        <ModificationFormationPage onButtonClick={openFormationPopup} />
                        <ModificationFormationPage onButtonClick={openFormationPopup} />
                    </div>
                </div>
            </MainContentPage>
            {isFormationPopupOpen && (
                <FormationPopUpPage onClose={closeFormationPopup}>
                    <div>
                        <h1 className='text-lg'><b>Formation id:</b> vljbsof2FDG6sef2cSdf63sqd</h1>
                        <form className="space-y-4">
                            <div className='my-4'>
                                <label htmlFor="formationName" className="block text-base font-semibold font-marianne text-black">Nom de la formation</label>
                                <input
                                    type="text"
                                    id="formationName"
                                    name="formationName"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-blue focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    defaultValue="Licence - Langues, littératures et civilisations étrangères et régionales - Parcours Anglais"
                                />
                            </div>
                            <div className='my-4'>
                                <label htmlFor="formationPlaces" className="block text-base font-semibold font-marianne text-black">Places disponibles</label>
                                <input
                                    type="number"
                                    id="formationPlaces"
                                    name="formationPlaces"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-blue focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    defaultValue="100"
                                />
                            </div>
                            <div className='my-4'>
                                <label htmlFor="accessRate" className="block text-base font-semibold font-marianne text-black">Taux d'accès</label>
                                <input
                                    type="text"
                                    id="accessRate"
                                    name="accessRate"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-blue focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    defaultValue="78%"
                                />
                            </div>
                            <div className='my-4'>
                                <label htmlFor="formationDescription" className="block text-base font-semibold font-marianne text-black">Description de la Formation</label>
                                <textarea
                                    id="formationDescription"
                                    name="formationDescription"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-blue focus:ring focus:ring-indigo-200 focus:ring-opacity-50 h-auto"
                                    defaultValue="La licence s'organise en majeure-mineure afin de préciser une progression pédagogique entre les enseignements fondamentaux et les enseignements transversaux. La première année de licence, assure à l'étudiant l'initiation à un ensemble de connaissances pluridisciplinaires. La professionnalisation est abordée en première année avec le projet professionnel, puis consolidée en 3ème année avec et un stage d'un mois. Pour consulter la plaquette de la licence : https://applisweb.universita.corsica/devu/fiches_diplomes/fiches_diplomes-front/index-front.php?rbk=2&profil=&id_site=1&acces=ok&id_art=389&id_rub=162&id_fiche=CLL_L_LANGUES_CLLANGLAIS"
                                />
                            </div>
                            <div className='my-4'>
                                <label htmlFor="certification" className="block text-base font-semibold font-marianne text-black">Certification</label>
                                <input
                                    type="text"
                                    id="certification"
                                    name="certification"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-blue focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    defaultValue="Diplôme National de Licence Contrôlé par l'État"
                                />
                            </div>
                            {/* Add more input fields as necessary */}
                            <div className="flex justify-end mt-6">
                                <button
                                    type="submit"
                                    className="px-4 py-2 text-base font-medium-marianne text-white bg-dark-blue hover:bg-light-blue"
                                >
                                    Enregistrer les modifications
                                </button>
                            </div>
                        </form>
                    </div>
                </FormationPopUpPage>
            )}
            {isAddPopupOpen && (
                <FormAddPopupPage onClose={closeAddPopup}>
                    <div>
                        <h1 className='text-lg'><b>Formation id:</b> vljbsof2FDG6sef2cSdf63sqd</h1>
                        <form className="space-y-4">
                            <div className='my-4'>
                                <label htmlFor="formationName" className="block text-base font-semibold font-marianne text-black">Nom de la formation</label>
                                <input
                                    type="text"
                                    id="formationName"
                                    name="formationName"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-blue focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    placeholder="Nom de la Formation"
                                />
                            </div>
                            <div className='my-4'>
                                <label htmlFor="formationPlaces" className="block text-base font-semibold font-marianne text-black">Places disponibles</label>
                                <input
                                    type="number"
                                    id="formationPlaces"
                                    name="formationPlaces"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-blue focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    placeholder="100"
                                />
                            </div>
                            <div className='my-4'>
                                <label htmlFor="accessRate" className="block text-base font-semibold font-marianne text-black">Taux d'accès</label>
                                <input
                                    type="text"
                                    id="accessRate"
                                    name="accessRate"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-blue focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    placeholder="Taux d'accès en %"
                                />
                            </div>
                            <div className='my-4'>
                                <label htmlFor="formationDescription" className="block text-base font-semibold font-marianne text-black">Description de la Formation</label>
                                <textarea
                                    id="formationDescription"
                                    name="formationDescription"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-blue focus:ring focus:ring-indigo-200 focus:ring-opacity-50 h-auto"
                                    placeholder="Description de la Formation"
                                />
                            </div>
                            <div className='my-4'>
                                <label htmlFor="certification" className="block text-base font-semibold font-marianne text-black">Certification</label>
                                <input
                                    type="text"
                                    id="certification"
                                    name="certification"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-blue focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    placeholder="Nom du Diplome"
                                />
                            </div>
                            {/* Add more input fields as necessary */}
                            <div className="flex justify-end mt-6">
                                <button
                                    type="submit"
                                    className="px-4 py-2 text-base font-medium-marianne text-white bg-dark-blue hover:bg-light-blue"
                                >
                                    Enregistrer la Formation
                                </button>
                            </div>
                        </form>
                    </div>
                </FormAddPopupPage>
            )}
        </div>
    );
};

export default GestionFormationPage;
