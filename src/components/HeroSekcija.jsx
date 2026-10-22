import heroSlika from "../assets/car.jpg";

const HeroSekcija = () => {
  return (
    <div className="hero">
      <img className="hero-slika" src={heroSlika} />
      <div className="hero-sadrzaj">
        <p className="hero-oznaka">Održavanje i popravak vozila</p>
        <h1>Autoservis FE - Vaš automobil u dobrim rukama</h1>
        <p>Redvoiti servisi, provjera kočnica i dijagnostika.</p>
      </div>
    </div>
  );
};

export default HeroSekcija;
