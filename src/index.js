import React from "react";
import ReactDOM from "react-dom";
import { UserProvider } from "./context/ContextEmail";
import { MessageProvider } from "./context/ContextMessage";

import MainRoutes from "./routes/MainRoutes";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <MessageProvider>
        <MainRoutes />
      </MessageProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
