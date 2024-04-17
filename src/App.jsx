import React, { useState } from "react";
import Form from "./components/Form";

function App() {
  const [tipusEstudiant, setTipusEstudiant] = useState("no-graduat");
  const [placesNoGraduats, setPlacesNoGraduats] = useState(60); // Places per a No-Graduats
  const [placesGraduats, setPlacesGraduats] = useState(40); // Places per a Graduats

  const handleChange = (e) => {
    setTipusEstudiant(e.target.value);
  };

  const handleFormSubmit = () => {
    tipusEstudiant === "no-graduat"
      ? setPlacesNoGraduats(placesNoGraduats - 1)
      : setPlacesGraduats(placesGraduats - 1);
  };

  const setPlacesDisponibles = (updatedPlaces) => {
    tipusEstudiant === "no-graduat"
      ? setPlacesNoGraduats(updatedPlaces)
      : setPlacesGraduats(updatedPlaces);
  };

  // Suma de places disponibles per als estudiants graduats i no graduats
  const placesTotalsDisponibles = placesNoGraduats + placesGraduats;

  return (
    <div className="flex flex-col items-center justify-center gap-5 h-screen">
      <div className="tipusEstudiant">
        <label className="mr-2">Selecciona Tipus d'Estudiant:</label>
        <select
          className="appDropDown border rounded-md py-1 px-2"
          onChange={handleChange}
          value={tipusEstudiant}
        >
          <option value="no-graduat">No Graduat</option>
          <option value="graduat">Graduat</option>
        </select>
      </div>
      <Form
        tipusEstudiantSelect={tipusEstudiant}
        onFormSubmit={handleFormSubmit}
        setPlacesDisponibles={setPlacesDisponibles}
        placesActuals={
          tipusEstudiant === "no-graduat" ? placesNoGraduats : placesGraduats
        }
      />
      <p>Places restants per a No-Graduats: {placesNoGraduats}</p>
      <p>Places restants per a Graduats: {placesGraduats}</p>
      <p>Places totals disponibles: {placesTotalsDisponibles}</p>
    </div>
  );
}

export default App;
