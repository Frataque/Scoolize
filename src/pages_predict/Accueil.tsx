import React from 'react';
import MainContentPage from '../components/MainContent';
import NavbarPage from '../components/NavBar/NavBar'
import Banneracc from '../pages_predict/components/banneracc'
import CandidatureCard from '../pages_predict/components/cardCandidature/cardCandidature'
import FavorisCard from '../pages_predict/components/cardFavoris/cardfav'
import SearchBarPage1 from '../pages_predict/components/SearchBarcopy'
import SuggestionsCard from '../pages_predict/components/cardFavoris copy/cardfav'

export interface IAccueilPageProps { };

const AccueilPage: React.FunctionComponent<IAccueilPageProps> = (props) => {
    return (<div>
        <MainContentPage>
            <NavbarPage />
            <div className="flex flex-col min-h-screen ">
                <div className="banner">
                    <Banneracc />
                </div>

                <div className="flex-grow flex mt-12">
                    <div className="flex-1 flex flex-col items-center mt-12" >
                        <SearchBarPage1 />
                        <div className='mt-12'>
                            <SuggestionsCard />
                        </div> 
                    </div>
                    <div className="flex-1 flex flex-col items-end space-y-8">
                        <CandidatureCard />
                        <FavorisCard />
                    </div>
                </div>
            </div>
        </MainContentPage>
    </div>)
}

export default AccueilPage