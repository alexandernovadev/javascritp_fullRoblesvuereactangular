import React from "react";
import "./assets/css/App.css";
import "./assets/css/Styles.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./components/Router";

// Importar Componentes

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

