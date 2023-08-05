interface IOverlayContext {
  show: boolean;
  showOverlay: (show: boolean, text?: string) => void;
}
