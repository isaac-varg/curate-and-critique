import React from "react";

const DialogTitle = ({ title, children }: { title?: string  | undefined,  children?: React.ReactNode }) => {
    return (
      <h1 className="font-poppins font-semibold text-3xl text-city-900 mb-6">
        {children || title}
      </h1>
    );
  };
  
  export default DialogTitle;
