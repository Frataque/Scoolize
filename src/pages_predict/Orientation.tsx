import React, { useState } from "react";
import MainContentPage from "../components/MainContent";
import ButtonFicheMetierPage from "./components/ButtonFicheMetier";
import PopupFicheMetierPage from "./components/PopupFicheMetier";
import ConseilVideoPage from "./components/ConseilVideo";
import CardJpoPage from "./components/CardJpo";

export interface IOrientationsPageProps {}

const OrientationsPage: React.FunctionComponent<IOrientationsPageProps> = (
  props
) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleInterestClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const fichemetier = [
    "Business Analyst",
    "Scrum Master",
    "Product Owner",
    "Developpeur Full Stack",
    "Chef de Projet IT",
    "Data Analyst",
  ];

  const videoUrls = [
    "https://www.youtube.com/embed/UuGFfDbPjXA?si=d9S3Hm8iZC1UToUg",
    "https://www.youtube.com/embed/byGwVMudvCI?si=jB5mD8Kn95EOw0Ty",
    "https://www.youtube.com/embed/GzroXDzzCSc?si=KOIni_QO9AKc7GSg",
    "https://www.youtube.com/embed/e4NHUBB6bos?si=kKzCMzhaI47NnIQJ",
    "https://www.youtube.com/embed/25HaTXYoj5E?si=KACZjccC2m6MH2wq",
    "https://www.youtube.com/embed/q6LZXh9y3uw?si=tHfK3xElJFw-Gfqt",
    "https://www.youtube.com/embed/deDDAlOV_5A?si=xy3OJX2jCgZVY-0V",
  ];

  const jpo = [
    {
      ecole: "EDS",
      date: "6/01/2024",
      location: "Lyon",
      img_url:
        "https://www.epitech.digital/wp-content/uploads/2023/03/AVATAR-LOGO-EPITECH-DIGI-RS.jpg",
    },
    {
      ecole: "IPSA",
      date: "21/01/2024",
      location: "Toulouse",
      img_url:
        "https://www.ipsa.fr/wp-content/uploads/IPSA_LOGO_2021_QUADRI.png",
    },
    {
      ecole: "ISG",
      date: "12/01/2024",
      location: "Paris",
      img_url:
        "https://atlanticdigital.fr/visite-virtuelle/ecole/isg/lyon/assets/uploaded/20210304132220.puTaOn.png",
    },
    {
      ecole: "Skema",
      date: "12/01/2024",
      location: "Nice",
      img_url:
        "data:image/jpeg;base64,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",
    },
    {
      ecole: "Univ Lyon",
      date: "21/01/2024",
      location: "Lyon",
      img_url:
        "data:image/png;base64,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",
    },
  ];

  const handleCardClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <MainContentPage>
        <div className="flex overflow-x-auto no-scrollbar space-x-4 py-4 px-8">
          <ButtonFicheMetierPage
            onInterestClick={handleInterestClick}
            fichemetier={fichemetier}
          />
        </div>
        <div className="flex flex-row">
          <div className="flex-[3] overflow-y-auto ml-[50px] mt-[40px] pr-8">
            <ConseilVideoPage videoUrls={videoUrls} />
          </div>
          <div className="flex-[1] mt-[40px]">
            <h1 className="text-[27px] font-medium-marianne mb-3 tracking-tight">
              Date JPO
            </h1>
            <div className="grid grid-cols-2 gap-4 overflow-y-auto max-h-[435px]">
              {jpo.map((jpo, index) => (
                <CardJpoPage
                  key={index}
                  ecole={jpo.ecole}
                  date={jpo.date}
                  location={jpo.location}
                  img_url={jpo.img_url}
                  onClick={() =>
                    handleCardClick(
                      "https://www.epitech.digital/inscription-journee-portes-ouvertes/?CampaignId=701Sm000003LdHeIAK"
                    )
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </MainContentPage>
      {showPopup && (
        <PopupFicheMetierPage onClose={handleClosePopup}>
          <div>
            <h1 className="text-2xl font-bold mb-4 text-center">
              Business Analyst
            </h1>
            <p className="text-sm mb-2">
              Le Business Analyst est un professionnel qui analyse les besoins
              de l'entreprise et propose des solutions pour améliorer ses
              processus et systèmes. Il joue un rôle crucial dans la liaison
              entre les départements IT et les autres services de l'entreprise.
            </p>
            <h2 className="text-xl font-semibold mb-2">
              Responsabilités principales :
            </h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                Étudier les processus d'affaires et proposer des améliorations.
              </li>
              <li>
                Collaborer avec les équipes IT pour développer et implémenter
                des solutions.
              </li>
              <li>
                Réaliser des analyses de données pour soutenir les décisions
                stratégiques.
              </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">
              Compétences requises :
            </h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                Excellentes capacités analytiques et de résolution de problèmes.
              </li>
              <li>Compétences en communication et en présentation.</li>
              <li>Connaissances en informatique et en analyse de données.</li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">
              Formation et Expérience :
            </h2>
            <p className="text-sm">
              Un diplôme en gestion d'entreprise, en informatique ou dans un
              domaine connexe est souvent requis. Une expérience dans l'analyse
              de processus d'affaires ou dans un rôle similaire est préférable.
            </p>
          </div>
        </PopupFicheMetierPage>
      )}
    </div>
  );
};

export default OrientationsPage;
