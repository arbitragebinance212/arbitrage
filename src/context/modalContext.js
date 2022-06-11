import { createContext, useContext, useState } from "react";
import ethQR from "../assets/ethQR.jpeg";
export const ModalContext = createContext(null);

export const ModalObject = () => {
  const { toggleModalFunction, toggleModalContainer, setConfig, config } =
    useContext(ModalContext);
  return { toggleModalFunction, toggleModalContainer, setConfig, config };
};

// 2nd Step 2
export const ModalProvider = ({ children }) => {
  const [toggleModalContainer, settoggleModalContainer] = useState(false);
  const [config, setConfig] = useState({
    src: "",
    address: "",
    coin: "",
  });
  // This functionality close the modal
  const toggleModalFunction = () => {
    settoggleModalContainer(!toggleModalContainer);
  };

  return (
    <ModalContext.Provider
      value={{ toggleModalFunction, toggleModalContainer, setConfig, config }}
    >
      {children}
    </ModalContext.Provider>
  );
};
