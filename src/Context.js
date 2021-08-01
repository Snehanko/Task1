import React, { useState, createContext } from "react";
import list_of_candidates from "./List";

export const ListContext = createContext();

export default function ListProvider(props) {
    const [candidate, setCandidate] = useState(list_of_candidates);

  return (
    <div>
      <ListContext.Provider value={[candidate, setCandidate]}>{props.children}</ListContext.Provider>
    </div>
  );
}
