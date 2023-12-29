import React, { useState, useEffect } from "react";
import MainContentPage from "../components/MainContent";
import SearchBarPage from "./components/SearchBar";
import FormationFilterPage from "./components/FormationFilter";
import CardFormationPage from "./components/CardFormation";
import MapFormationPage from "./components/MapFormation";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../auth/firebaseConfig";

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

export interface IFormationsPageProps {}

const FormationsPage: React.FunctionComponent<IFormationsPageProps> = (
  props
) => {
  const [formations, setFormations] = useState<Formation[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const formationsCollection = collection(firestore, "formations");
      const formationsSnapshot = await getDocs(formationsCollection);
      const formationsList: Formation[] = formationsSnapshot.docs.map((doc) => {
        const data = doc.data();
        console.log(data);
        return {
          id: doc.id,
          contrat: data.contrat,
          ecole: data.ecole,
          formation: data.formation,
          link: data.link,
          localisation: data.localisation,
          nb_places: data.nb_places,
          resume: data.resume,
          taux_acces: data.taux_acces,
          tags: data.tags,
        };
      });
      setFormations(formationsList);
    };
    fetchData();
  }, []);

  return (
    <MainContentPage>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 space-y-4 md:space-y-0">
          <SearchBarPage />
          <FormationFilterPage />
        </div>
        <div className="flex flex-wrap mx-2">
          <div className="w-full lg:w-1/2 px-2 mb-4">
            <div className="w-[191px] h-[34px] text-black text-[32px] font-medium-marianne leading-tight">
              Proposition
            </div>
            <div
              className="overflow-y-auto mt-2 mb-2 ml-2 mr-2 p-2 rounded-lg"
              style={{ maxHeight: "700px" }}
            >
              {formations.map((formation) => (
                <CardFormationPage key={formation.id} data={formation} />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-2 h-full">
            <div className="w-[191px] h-[34px] text-black text-[32px] font-medium-marianne leading-tight">
              Carte
            </div>
            <MapFormationPage />
          </div>
        </div>
      </div>
    </MainContentPage>
  );
};

export default FormationsPage;
