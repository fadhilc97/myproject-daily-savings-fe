interface IOverlayContext {
  show: boolean;
  showOverlay: (show: boolean, text?: string) => void;
}

interface IAlertContext {
  showAlert: (type: AlertType, message: string) => void;
}
