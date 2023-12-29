import React from 'react';

const OffreCondense = () => (
  <>
    <style>
      {`
        .bouton-voir-plus:hover {
            background-color: #000091;
            color: white;
        }
      `}
    </style>
    <div className="flex justify-between items-center self-stretch p-2.5 p-2 h-[3.0625rem] border-b border-b-[#000091] bg-white">
      <div className="flex flex-col items-start gap-2.5 p-2.5 p-2">
        <div className="flex items-start gap-0.5 text-black font-['Marianne'] leading-5">
          Epitech Digital School
        </div>
      </div>
      <div className="flex justify-center items-center gap-2.5 py-2 px-4 border border-[#000091] bg-white text-[#000091] font-['Marianne'] leading-[normal] bouton-voir-plus">
        Accéder
      </div>
    </div>
  </>
);

export default OffreCondense;
