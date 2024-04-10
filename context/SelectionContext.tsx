"use client";

import React, { useState, createContext } from "react";

interface SelectionState {
  activeCollectionId: string | null;
}

interface SelectionStateProps extends SelectionState {
  setSelectionState: React.Dispatch<React.SetStateAction<SelectionState>>;
}

export const SelectionContext = createContext<SelectionStateProps>({
  activeCollectionId: null,
  setSelectionState: () => {},
});

type SelectionContextProps = {
  children: React.ReactNode;
};
// allows us to reset from hooks or elsewhere
export const SelectionContextDefaults: SelectionStateProps = {
  activeCollectionId: null,
  setSelectionState: () => {},
};

export const SelectionContextProvider = ({
  children,
}: SelectionContextProps) => {
  const [selectionState, setSelectionState] = useState<SelectionState>(
    SelectionContextDefaults
  );

  return (
    <SelectionContext.Provider value={{ ...selectionState, setSelectionState }}>
      {children}
    </SelectionContext.Provider>
  );
};

export default SelectionContextProvider;
