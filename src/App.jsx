import React, { useState } from "react";
import Form from "./components/Form";

function App() {
  const [tipusEstudiant, setTipusEstudiant] = useState("no-graduat");
  const [places, setPlaces] = useState(100); // Variable d'estat per a les places

  const handleChange = (e) => {
    setTipusEstudiant(e.target.value);
  };

  const handleFormSubmit = () => {
    // Actualitzar les places restants quan es submit el formulari
    setPlaces(places - 1);
  };

  const setPlacesDisponibles = (updatedPlaces) => {
    setPlaces(updatedPlaces);
  };

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
        placesActuals={places}
      />
      <p>Places restants: {places}</p>{" "}
    </div>
  );
}

export default App;
