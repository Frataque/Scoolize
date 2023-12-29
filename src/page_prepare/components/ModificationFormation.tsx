import React from 'react';

export interface IModificationFormationPageProps {
    onButtonClick: () => void;
};

const ModificationFormationPage: React.FunctionComponent<IModificationFormationPageProps>=({onButtonClick})=>{
    return (<div>
        <div className="max-w-[531px] h-auto bg-white overflow-hidden my-5 border">
            <div className="p-2.5">
                <div className='my-[5px]'>
                    <h3 className="text-black text-[22px] font-marianne-medium p-2.5 leading-tight">Université de Corte (20)</h3>
                </div>
                <div className="flex items-center p-[10px] my-[5px]">
                    <p className="text-sky font-medium-marianne bg-lightlight-blue px-1.5 rounded text-xs mr-4">PLACES DISPONIBLES : 25</p>
                    <p className="text-sky font-medium-marianne bg-lightlight-blue px-1.5 rounded text-xs">TAUX D'ACCÈS : 99 %</p>
                </div>
                <div className="p-[10px] my-[5px]">
                    <button onClick={onButtonClick} className="text-white bg-dark-blue hover:bg-light-blue px-4 py-2 text-base font-medium-marianne">Modifier la formation</button>
                </div>
            </div>
        </div>
    </div>)
}

export default ModificationFormationPage