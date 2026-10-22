import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import HeroSekcija from "./components/HeroSekcija.jsx";
import Naslovnica from "./pages/Naslovnica.jsx";
import Kontakt from "./pages/Kontakt.jsx";
import { Route, Routes } from "react-router";

export default function App() {
  return (
    <>
      <Header />
      <HeroSekcija />
      <main id="glavni-sadrzaj">
        <Routes>
          <Route path="/" element={<Naslovnica />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
