import React from 'react';
import OffreCondense from '../cardCandidature/statuscandid/statucandid'
import Title from '../cardCandidature/title/title'

const CandidatureCard = () => (
<div className="flex flex-col items-start gap-2.5 p-2.5 p-2 w-[600px] border border-black">
    <Title/>
    <OffreCondense/>
    <OffreCondense/>
    <OffreCondense/>
    <OffreCondense/>
</div>
);

export default CandidatureCard;
