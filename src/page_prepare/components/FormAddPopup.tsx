import React from 'react';
import MainContentPage from './MainContent';

export interface IFormAddPopupPageProps {
    onClose: () => void;
    children: React.ReactNode;
};

const FormAddPopupPage: React.FunctionComponent<IFormAddPopupPageProps>=({onClose, children})=>{
    return (
        <MainContentPage>
            <div className="fixed inset-0 overflow-y-auto h-full w-full z-50 flex justify-center items-start pt-20">
                <div className="w-4/6 ml-auto p-5 border-dark-blue shadow-lg bg-white mr-[90px]">
                    <div className="flex justify-between items-center pb-3">
                        <span className="text-2xl font-bold font-marianne">Ajouter une Formation</span>
                        <div className="cursor-pointer" onClick={onClose}>×</div>
                    </div>
                    {children}
                </div>
            </div>
        </MainContentPage>
    )
}

export default FormAddPopupPage