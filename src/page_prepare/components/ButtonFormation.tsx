import React from 'react';

interface IButtonFormationPageProps {
    onAddClick: () => void;
}

const ButtonFormationPage: React.FC<IButtonFormationPageProps> = ({onAddClick}) => {
    return (
        <div className='w-[179px] h-[97px] px-8 py-6 bg-lightlight-blue border border-dark-blue justify-center items-center gap-2.5 inline-flex'>
            <button onClick={onAddClick} className='text-center text-black text-xl font-medium-marianne leading-normal'>
                Ajouter une Formation
            </button>
        </div>
    );
};

export default ButtonFormationPage;
