import React from "react";

export interface ICardFormationPageProps {
  data: Formation;
}

interface Formation {
  id: string;
  contrat: string;
  ecole: string;
  formation: string;
  link: string;
  localisation: string;
  nb_places: number;
  resume: string;
  taux_acces: string;
  tags: string[];
}

const CardFormationPage: React.FunctionComponent<ICardFormationPageProps> = ({
  data,
}) => {
  return (
    <div>
      <div className="max-w-[531px] h-auto bg-white overflow-hidden my-5 border">
        <div className="p-2.5">
          <span className="text-xs font-marianne-normal text-stone bg-lightlight-red rounded-full px-2 py-0.5">
            {data.contrat}
          </span>
          <div className="my-[5px]">
            <h3 className="text-black text-[22px] font-marianne p-2.5 leading-tight">
              {data.ecole}
            </h3>
            <p className="text-black text-sm font-normal-marianne px-2.5 pb-2.5 leading-tight">
              {data.formation}
            </p>
          </div>
          <div className="flex items-center p-[10px] my-[5px]">
            <p className="text-sky font-medium-marianne bg-lightlight-blue px-1.5 rounded text-xs mr-4">
              PLACES DISPONIBLES : {data.nb_places}
            </p>
            <p className="text-sky font-medium-marianne bg-lightlight-blue px-1.5 rounded text-xs">
              TAUX D'ACCÈS : {data.taux_acces}
            </p>
          </div>
          <div className="p-[10px] my-[5px]">
            <button className="text-white bg-dark-blue hover:bg-light-blue px-4 py-2 text-base font-medium-marianne">
              Voir la formation
            </button>
          </div>
          <div className="pt-3 flex justify-between items-center shadow p-[10px] my-[5px]">
            <h4 className="text-black text-base font-light-marianne">
              Formations similaires
            </h4>
            <button className="text-black text-base font-light-marianne">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFormationPage;
