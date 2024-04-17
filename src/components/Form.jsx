import React, { useState } from "react";
import PropTypes from "prop-types";

function Form(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setWelcomeMessage(`Benvingut, ${firstName} ${lastName}`);
  };

  // Determinem el títol del formulari basat en el valor de tipusEstudiantSelect
  let formTitle = "";
  if (props.tipusEstudiantSelect === "no-graduat") {
    formTitle = "Detalls d'estudiant no graduat";
  } else if (props.tipusEstudiantSelect === "graduat") {
    formTitle = "Detalls d'estudiant graduat";
  }

  return (
    <div>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-4">{formTitle}</h1>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Nom:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="fname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <br />
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Cognom:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="lname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <br />
        <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
          type="submit"
          value="Submit"
        />
        <label className="block w-full text-4xl mb-4 p-2" id="studentMsg">
          {welcomeMessage}
        </label>
      </form>
    </div>
  );
}

Form.propTypes = {
  tipusEstudiantSelect: PropTypes.string.isRequired,
};

export default Form;
