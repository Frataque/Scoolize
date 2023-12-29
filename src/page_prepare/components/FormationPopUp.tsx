import React from 'react';
import MainContentPage from './MainContent';

interface IFormationPopUpPageProps {
    onClose: () => void;
    children: React.ReactNode;
}

const FormationPopUpPage: React.FC<IFormationPopUpPageProps> = ({ onClose, children }) => {
    return (
        <MainContentPage>
            {/* Full-screen background with flexbox to center children */}
            <div className="fixed inset-0 overflow-y-auto h-full w-full z-50 flex justify-center items-start pt-20">
                {/* Popup width of 4/6 centered to the right */}
                <div className="w-4/6 ml-auto p-5 border-dark-blue shadow-lg bg-white mr-[90px]">
                    {/* Popup content */}
                    <div className="flex justify-between items-center pb-3">
                        <span className="text-2xl font-bold font-marianne">Modifier votre Formation</span>
                        <div className="cursor-pointer" onClick={onClose}>×</div>
                    </div>
                    {children}
                </div>
            </div>
        </MainContentPage>
    );
};

export default FormationPopUpPage;
