import { Link } from "react-router";
import KarticaKategorije from "../components/KarticaKategorije";

const Naslovnica = () => {
  const kategorije = [
    {
      naslov: "Mali servis",
      opis: "Zamjena ulja i filtera te pregled osnovnmih dijelova vozila.",
    },
    { naslov: "Kočnice", opis: "Provjera i zamjena pločica i diskova." },
    {
      naslov: "Dijagnostika",
      opis: "Očitavanje grešaka i pronalazak uzroka problema na vozilu.",
    },
  ];

  return (
    <section className="section">
      <h2>Usluge našeg autoservisa</h2>
      <p>
        Od redovitog održavanja do provjere kvarova. Pošaljite upit i dogovorite
        termin.
      </p>
      <div className="kartice">
        {kategorije.map((kategorija) => (
          <KarticaKategorije key={kategorija.naslov} kategorija={kategorija} />
        ))}
      </div>
      <div className="actions">
        <Link className="gumb" to="/kontakt">
          Pošalji upit
        </Link>
      </div>
    </section>
  );
};

export default Naslovnica;
