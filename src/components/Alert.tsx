import { useEffect } from "react";

type Props = {
  isShow: boolean;
  type: AlertType;
  message: string;
  onClose: () => void;
};

function Alert({ isShow, type, message, onClose }: Props) {
  let classes =
    "rounded-lg w-3/4 px-3 py-2 border absolute left-[12.5%] top-4 flex justify-between items-center";
  let bgClasses = "";
  let borderClasses = "";
  let hiddenClasses = isShow ? "" : "hidden";

  switch (type) {
    case "info":
      bgClasses = "bg-blue-50";
      borderClasses = "border-blue-500";
      break;
    case "success":
      bgClasses = "bg-green-50";
      borderClasses = "border-green-500";
      break;
    case "warning":
      bgClasses = "bg-orange-50";
      borderClasses = "border-orange-500";
      break;
    case "error":
      bgClasses = "bg-red-50";
      borderClasses = "border-red-500";
      break;
  }

  classes = [hiddenClasses, classes, bgClasses, borderClasses].join(" ");

  useEffect(() => {
    const timeoutId = setTimeout(onClose, 5000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isShow]);

  return (
    <div className={classes}>
      <p>{message}</p>
      <button type="button" className="text-xl" onClick={onClose}>
        &times;
      </button>
    </div>
  );
}

export default Alert;
