import React from 'react';
import Carte from '../../assets/images/carte.svg'

export interface IMapFormationPageProps { };

const MapFormationPage: React.FunctionComponent<IMapFormationPageProps> = (props) => {
    return (<div>
       <div>
            <img src={Carte} alt="map" className='w-[500px] h-[680px] mt-[18px]' />
       </div>
    </div>)
}

export default MapFormationPage