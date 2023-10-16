import React from "react";
import Rotas from "./routes/router";
import { AuthProvider } from "./context/auth";

export default function App() {
    return(
      <AuthProvider>
        <Rotas/>
      </AuthProvider>
    )
}