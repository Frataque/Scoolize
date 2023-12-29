import React from 'react';

export interface IMainContentPageProps {
  children?: React.ReactNode;
}

const MainContentPage: React.FunctionComponent<IMainContentPageProps> = ({ children }) => {
  return (
    <div className="ml-[321px] p-4">
      {children}
    </div>
  );
};

export default MainContentPage;
