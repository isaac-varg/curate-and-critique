import React from "react";
import DialogContextProvider from "./DialogContext";
import SelectionContextProvider from "./SelectionContext";

type ProvidersProps = {
  children: React.ReactNode;
};

const ContextProviders = ({ children }: ProvidersProps) => {
  return (
    <DialogContextProvider>
      <SelectionContextProvider>{children}</SelectionContextProvider>
    </DialogContextProvider>
  );
};

export default ContextProviders;
