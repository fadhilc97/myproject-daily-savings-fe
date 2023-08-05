import ReactDOM from "react-dom";

type Props = {
  show: boolean;
  text?: string;
};

function LoadingOverlay({ show, text = "Loading..." }: Props) {
  return (
    show &&
    ReactDOM.createPortal(
      <div className="bg-slate-900 absolute flex items-center justify-center top-0 bottom-0 left-0 right-0 opacity-70">
        <p className="text-white font-medium">{text}</p>
      </div>,
      document.getElementById("overlay")!
    )
  );
}

export default LoadingOverlay;
