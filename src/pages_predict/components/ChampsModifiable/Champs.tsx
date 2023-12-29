import React, { useState } from 'react';

const ChampsModif = () => {
  const [editMode, setEditMode] = useState(false); 
  const [text, setText] = useState('Votre formation préférée'); 

 
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  
  const enableEditMode = () => {
    setEditMode(true);
  };

  
  const disableEditMode = () => {
    setEditMode(false);
  };

  return (
    <div className="w-[409px] h-[3.0625rem]">
      <div className="flex items-center justify-between p-2.5 w-[409px] h-[3.0625rem] border-b border-b-[#000091] bg-white">
        <div className="flex flex-col justify-center">
          {editMode ? (
            <input
              type="text"
              value={text}
              onChange={handleTextChange}
              onBlur={disableEditMode} 
              autoFocus
              className="text-black font-['Marianne'] leading-5"
            />
          ) : (
            <div
              className="text-black font-['Marianne'] leading-5 cursor-pointer"
              onDoubleClick={enableEditMode} 
            >
              {text}
            </div>
          )}
        </div>
        <div className="flex justify-center items-center cursor-pointer" onClick={enableEditMode}>
          <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.82938 1.13391H3.20734C1.98826 1.13391 1 2.12217 1 3.34126V18.7927C1 20.0118 1.98826 21 3.20734 21H18.6588C19.8779 21 20.8661 20.0118 20.8661 18.7927V12.1706" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.17357 10.5151L17.003 1.68574C17.9172 0.771421 19.3997 0.771421 20.314 1.68574C21.2283 2.60005 21.2283 4.08244 20.314 4.99675L11.4846 13.8261L6.51807 15.4816L8.17357 10.5151Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ChampsModif;
