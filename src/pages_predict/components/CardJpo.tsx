import React from 'react';

export interface ICardJpoPageProps {
    ecole: string;
    date: string;
    location: string;
    img_url: string;
};

const CardJpoPage: React.FunctionComponent<ICardJpoPageProps & { onClick: () => void }> = ({ecole, date, location, img_url, onClick}) => {
    return (<div>
        <div onClick={onClick} className="w-[129px] h-[183px] px-[18px] py-3 bg-white border border-light-grey flex-col justify-start items-center gap-4 inline-flex my-2">
            <img className="w-[75px] h-[75px] rounded-full" src={img_url} alt='logo' />
            <div className="text-black text-base font-bold font-marianne leading-tight">{ecole}</div>
            <div className="flex-col justify-center items-start flex">
                <div className="flex-col justify-center items-center flex">
                    <div className="text-black text-base font-light-marianne leading-tight">{date}</div>
                    <div className="w-[45px] h-6 text-black text-base font-marianne leading-tight">{location}</div>
                </div>
            </div>
        </div>
    </div>)
}

export default CardJpoPage