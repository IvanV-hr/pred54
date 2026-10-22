const KarticaKategorije = ({ kategorija }) => {
  return (
    <div className="kartica">
      <h3>{kategorija.naslov}</h3>
      <p>{kategorija.opis}</p>
    </div>
  );
};

export default KarticaKategorije;
