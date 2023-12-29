import React from "react";
import { ChatProvider } from "./context/ChatContext";
import { AuthProvider } from "./context/AuthContext";
import AuthenticatedApp from "./AuthentificatedApp"; // New component

function App() {
  return (
    <AuthProvider>
      <ChatProvider>
        <AuthenticatedApp /> {/* New component that contains the logic */}
      </ChatProvider>
    </AuthProvider>
  );
}

export default App;
