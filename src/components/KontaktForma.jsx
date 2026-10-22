import { useState } from "react";
import { Button } from "./Button";

const KontaktForma = () => {
  const [podatci, setPodatci] = useState({
    ime: "",
    email: "",
    poruka: "",
    greska: "",
    poslano: false,
  });

  function promijeniPodatke(e) {
    setPodatci({
      ...podatci,
      [e.target.name]: e.target.value?.trim(),
      greska: "",
      poslano: false,
    });
  }

  function posalji(e) {
    e.preventDefault();

    if (podatci.ime.length < 2) {
      setPodatci({
        ...podatci,
        greska: "Upišite valjano ime. Ime mora imati barem 2 slova.",
        poslano: false,
      });

      return;
    }

    if (!/^[\w.-]+@[\w.-]+\.\w{2,4}$/.test(podatci.email)) {
      setPodatci({
        ...podatci,
        greska: "Upišite valjani email.",
        poslano: false,
      });

      return;
    }

    if (podatci.poruka.length < 10) {
      setPodatci({
        ...podatci,
        greska: "Upišite valjanu poruka. Poruka mora imati barem 10 znakova.",
        poslano: false,
      });

      return;
    }

    setPodatci({ ...podatci, greska: "", poslano: true });
  }

  return (
    <form className="forma" onSubmit={posalji} noValidate>
      <label htmlFor="ime">Ime i prezime</label>
      <input
        id="ime"
        name="ime"
        value={podatci.ime}
        type="text"
        onChange={promijeniPodatke}
      />
      <label htmlFor="email">Adresa e-pošte</label>
      <input
        id="email"
        name="email"
        value={podatci.email}
        type="email"
        onChange={promijeniPodatke}
      />
      <label htmlFor="poruka">Poruka</label>
      <textarea
        id="poruka"
        name="poruka"
        rows="5"
        value={podatci.poruka}
        onChange={promijeniPodatke}
      ></textarea>
      {podatci.greska && <p className="greska">{podatci.greska}</p>}
      {podatci.poslano && (
        <p className="poslano">Poruka je zabilježena. Hvala na javljanju.</p>
      )}
      <Button type="Submit">Pošaljite poruku</Button>
    </form>
  );
};

export default KontaktForma;
