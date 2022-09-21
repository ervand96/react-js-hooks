import React, { useContext, useState } from "react";

const AlertContext = React.createContext({});

export const useAlert = () => {
  return useContext(AlertContext);
};

export const AlertProvider = ({ children }: any) => {
  const [alert, setAlert] = useState(false);
  const toggle = (): void => {
    setAlert((prev) => !prev);
  };
  return (
    <AlertContext.Provider
      value={{
        visible: alert,
        toggle,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};