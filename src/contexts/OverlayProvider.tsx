import React, { useState } from "react";
import LoadingOverlay from "../components/LoadingOverlay";

type Props = {
  children?: React.ReactNode;
};

export const OverlayContext = React.createContext<IOverlayContext>({
  show: false,
  showOverlay: () => {},
});

function OverlayProvider({ children }: Props) {
  const [show, setShow] = useState<boolean>(false);
  const [text, setText] = useState<string>("Loading ...");

  function showOverlay(show: boolean, text: string = "") {
    setShow(show);
    setText(text);
  }

  return (
    <OverlayContext.Provider value={{ show, showOverlay }}>
      <LoadingOverlay show={show} text={text} />
      {children}
    </OverlayContext.Provider>
  );
}

export default OverlayProvider;
