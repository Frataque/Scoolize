import React from 'react';
import MainContentPage from '../components/MainContent'
import PageCandidature from '../assets/images/pageCandidature.svg' 
import NavbarPage from '../components/NavBar/NavBar';

export interface ICandidaturesPageProps {};

const CandidaturesPage: React.FunctionComponent<ICandidaturesPageProps> = (props) => {
    return (
        <div>
            <MainContentPage>
              <NavbarPage/>
              <div className='ml-20'>
                <img src={PageCandidature} alt="Example" />
              </div>
            </MainContentPage>
        </div>
    )
}

export default CandidaturesPage;
