import React from 'react';

export interface IConseilVideoPageProps {
    videoUrls: string[];
};

const ConseilVideoPage: React.FunctionComponent<IConseilVideoPageProps> = ({ videoUrls }) => {
    return (
        <div>
            <h2 className="text-[27px] font-medium-marianne mb-4 tracking-tight">Conseils vidéo</h2>

            <div className="grid grid-cols-2 gap-4 h-[445px] overflow-y-auto scrollbar-hide space-x-4">
                {videoUrls.map((url, index) => (
                    <div key={index} className="min-w-[25%] shrink-0">
                        <iframe 
                            className="w-full h-auto aspect-video"
                            src={url}
                            title={`Video ${index}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ConseilVideoPage;
