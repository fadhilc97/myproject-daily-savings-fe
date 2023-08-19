type ButtonVariantType = "info" | "danger" | "success";

type Props = {
  variant?: ButtonVariantType;
  children?: React.ReactNode;
  linkTo?: string;
};

function Button({
  variant,
  children,
  linkTo,
  ...props
}: Props & React.ComponentProps<"button">) {
  const btnClasses: string[] =
    "px-3 py-2 border border-slate-400 rounded-md w-full".split(" ");

  if (variant) {
    btnClasses.push("text-white", "border-0");
  }

  switch (variant) {
    case "info":
      btnClasses.push("bg-sky-700");
      break;
    case "success":
      btnClasses.push("bg-green-700");
      break;
    case "danger":
      btnClasses.push("bg-red-700");
      break;
  }

  return (
    <button className={btnClasses.join(" ")} {...props}>
      {children}
    </button>
  );
}

export default Button;
