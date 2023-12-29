import React from 'react';
import MainContentPage from './components/MainContent';
import NavbarPage from '../components/NavBar/NavBar';
import PageCandidature from '../../src/assets/images/page_acc_prepare.svg' 

export interface IAccueilPageProps {};

const AccueilPage: React.FunctionComponent<IAccueilPageProps>=(props)=>{
    return (<div>
        <MainContentPage>
          <NavbarPage/>
          <div className='ml-15'>
            <img src={PageCandidature} alt="Example" />
          </div>
        </MainContentPage>
    </div>)
}

export default AccueilPage