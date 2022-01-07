import { useState } from "react";

export default function useInputValueKeeper(inputIDs) {
  // Convert the input array to an object with key (input Id) and value(input value)
  const [inputs, setInputs] = useState(
    Object.assign({}, ...inputIDs.map((item) => ({ [item]: null })))
  );

  function updateInputValue(id, value) {
    setInputs({ ...inputs, [id]: value });
  }

  return { inputs, updateInputValue };
}
