import React from "react";
import MainContentPage from "../../components/MainContent";
import MessageInput from "./components/Input";

export interface IAmbasProps {}

const Ambas: React.FunctionComponent<IAmbasProps> = (props) => {
  return (
    <MainContentPage>
      <MessageInput />
    </MainContentPage>
  );
};

export default Ambas;
