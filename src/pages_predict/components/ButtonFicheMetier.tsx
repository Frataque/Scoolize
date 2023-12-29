import React from 'react';
import FicheMetier from '../../assets/icons/fichemetier.svg';

export interface IButtonFicheMetierPageProps {
    onInterestClick: () => void;
    fichemetier: string[];
};

const ButtonFicheMetierPage: React.FunctionComponent<IButtonFicheMetierPageProps> = ({ onInterestClick, fichemetier }) => {
    return (
        <div className="flex">
            {fichemetier.map((metier, index) => (
                <div key={index} className="w-80 h-56 bg-lightlight-blue border border-light-grey flex flex-col justify-center items-center gap-4 mx-2">
                    <div className="text-black text-xl font-normal-marianne capitalize">{metier}</div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-black text-sm font-marianne italic">C’est quoi ?</div>
                        <img src={FicheMetier} alt='Fiche metier' className='w-24 h-24' />
                        <button className="text-black text-sm font-normal-marianne underline" onClick={onInterestClick}>Ça m'intéresse !</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ButtonFicheMetierPage;
