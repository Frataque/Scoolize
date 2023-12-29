import React from 'react';

export interface IPopupFicheMetierPageProps {
    onClose: () => void;
    children: React.ReactNode
};

const PopupFicheMetierPage: React.FunctionComponent<IPopupFicheMetierPageProps>=({onClose, children})=>{
    return (<div>
        <div className="fixed inset-0 overflow-y-auto h-full w-full z-50 flex justify-center items-start pt-20">
                {/* Popup width of 4/6 centered to the right */}
                <div className="w-4/6 ml-auto p-5 border-dark-blue shadow-lg bg-white mr-[90px]">
                    {/* Popup content */}
                    <div className="flex justify-between items-center pb-3">
                        <span className="text-2xl font-bold font-marianne">Fiche Metier:</span>
                        <div className="cursor-pointer" onClick={onClose}>×</div>
                    </div>
                    {children}
                </div>
            </div>
    </div>)
}

export default PopupFicheMetierPage