import { useState } from "react";

export default function useGlobalDataProvider() {
  const [name, setName] = useState('Daniel');

  const updateName = (paramName) => {
    setName(paramName);
  }

  return {
    name,
    updateName,
  };
}