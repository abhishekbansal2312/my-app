import React, { useState } from "react";

const Password = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const handleGeneratePassword = (event) => {
    event.preventDefault();
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let characterPool = "";

    if (includeUppercase) characterPool += uppercaseChars;
    if (includeLowercase) characterPool += lowercaseChars;
    if (includeNumbers) characterPool += numberChars;
    if (includeSymbols) characterPool += symbolChars;

    if (characterPool === "") {
      alert("Please select at least one character type.");
      return;
    }
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      generatedPassword += characterPool[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <div className="h-screen flex justify-center items-center  bg-gray-100">
      <form
        onSubmit={handleGeneratePassword}
        className="bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <input
            type="text"
            name="password"
            id="password"
            value={password}
            disabled
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="range" className="block text-sm font-medium mb-2">
            {length} characters
          </label>
          <input
            type="range"
            name="length"
            id="range"
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
              handleGeneratePassword(e);
            }}
            min="4"
            max="20"
            className="w-full"
          />
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            name="includeNumbers"
            id="includeNumbers"
            checked={includeNumbers}
            s
            onChange={(e) => setIncludeNumbers(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="includeNumbers" className="text-sm font-medium">
            Include numbers
          </label>
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            name="includeSymbols"
            id="includeSymbols"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="includeSymbols" className="text-sm font-medium">
            Include symbols
          </label>
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            name="includeUppercase"
            id="includeUppercase"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="includeUppercase" className="text-sm font-medium">
            Include uppercase letters
          </label>
        </div>

        <div className="mb-6 flex items-center">
          <input
            type="checkbox"
            name="includeLowercase"
            id="includeLowercase"
            checked={includeLowercase}
            onChange={(e) => setIncludeLowercase(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="includeLowercase" className="text-sm font-medium">
            Include lowercase letters
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
          Generate Password
        </button>
      </form>
    </div>
  );
};

export default Password;
