import React from "react";
import MainContentPage from "../components/MainContent";

export interface IVoeuxPageProps {}

const VoeuxPage: React.FunctionComponent<IVoeuxPageProps> = (props) => {
  return (
    <div>
      <MainContentPage>
        <h1>Voeux</h1>
      </MainContentPage>
    </div>
  );
};

export default VoeuxPage;
