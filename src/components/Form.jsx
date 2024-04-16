import React, { useState } from "react";

const [firstName, setFirstName] = useState("");

function Form() {
  return (
    <div>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Informació Estudiant</h1>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Nom:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="fname"
          onBlur={(e) => setFirstName(e.target.value)}
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
        />
        <br />
        <br />
        <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}
export default Form;
