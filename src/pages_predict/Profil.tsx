import React from 'react';
import MainContentPage from '../components/MainContent';
import ProfilSVG from '../assets/images/profil.svg'

export interface IProfilPageProps {};

const ProfilPage: React.FunctionComponent<IProfilPageProps> = (props) => {
  return (
    <div>
      <MainContentPage>
        <img src={ProfilSVG} alt="Predict" className="h-[811px] w-[1114px]" />
      </MainContentPage>
    </div>
  );
};

export default ProfilPage;
