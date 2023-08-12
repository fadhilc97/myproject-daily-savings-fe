import React, { useState } from "react";
import Alert from "../components/Alert";

export const AlertContext = React.createContext<IAlertContext>({
  showAlert: () => {},
});

type Props = {
  children?: React.ReactNode;
};

function AlertProvider({ children }: Props) {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [alertType, setAlertType] = useState<AlertType>("info");
  const [alertMessage, setAlertMessage] = useState<string>("");

  function showAlert(type: AlertType, message: string) {
    setIsShow(true);
    setAlertType(type);
    setAlertMessage(message);
  }

  function handleClose() {
    setIsShow(false);
  }

  return (
    <AlertContext.Provider value={{ showAlert }}>
      <Alert
        isShow={isShow}
        type={alertType}
        message={alertMessage}
        onClose={handleClose}
      />
      {children}
    </AlertContext.Provider>
  );
}

export default AlertProvider;
