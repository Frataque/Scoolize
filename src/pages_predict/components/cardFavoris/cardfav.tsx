import React from 'react';
import OffreCondense from '../cardFavoris/statuscandid/statucandid'
import Title from '../cardFavoris/title/title'

const FavorisCard = () => (
<div className="flex flex-col items-start gap-2.5 p-2.5 p-2 w-[600px] border border-black">
    <Title/>
    <OffreCondense/>
    <OffreCondense/>
    <OffreCondense/>
    <OffreCondense/>
</div>
);

export default FavorisCard;
